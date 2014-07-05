var express = require('express');
var logfmt = require('logfmt');
var async = require('async');
var cp = require('child_process');
var _ = require('underscore');
var app = express();

app.use(logfmt.requestLogger());
var dot_cmd = process.env.DOT || 'dot';

function handleErrorFn(res) {
    return function(err, data, callback /*(err, data)*/) {
        if (err) {
          console.error(err);
          res.send({ status: 'error', message: err.message });
        }
        else if (callback != null) {
          callback(null, data);
        }
    };
}

// Accept invitation
app.get('/graph/:dot/:type', function(req, res) {
    if (_.contains(['gif', 'jpeg', 'jpg', 'plain', 'plain-ext', 'png', 'ps', 'ps2', 'svg'], req.params.type)) {
        var dot = cp.spawn(dot_cmd, ['-T' + req.params.type]);
        dot.stdout.pipe(res);
        dot.stderr.on('data', function (data) {
              console.log('stderr: ' + data);
        });

        var dotIn = (new Buffer(req.params.dot, 'base64')).toString();
        console.log('Read dot file');
        console.log(dotIn);
        dot.stdin.write(dotIn);
        dot.stdin.end();
    } else {
        res.send(400, 'Invalid type specified');
    }
});


var port = Number(process.env.PORT || 8000);
app.listen(port, function() {
    console.log("Listening on " + port);
});


