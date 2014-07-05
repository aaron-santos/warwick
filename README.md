warwick
=======

Graphviz as a service aka: Webdot-alike for Node.

### Configuring

## Available environment variables

# `DOT` The command to run. Defaults to `dot`.

# `PORT` The port to run the service on. Defaults to `8000`.

### Running

```
npm update
```

```
node index.js
```

### Accessing

Visit `http://localhost:8000/graph/ZGlncmFwaCBHIHsNCglzdHlsZT1ib2xkOw0KCXN1YmdyYXBoIGNsdXN0ZXJfb3V0ZXIgew0KCQlBY3RfMSAtPiBBY3RfMjE7DQoJCUFjdF8xIC0+IEFjdF8yMzsNCgkJQWN0XzI1IC0+IEFjdF8zOw0KCQlzdWJncmFwaCBjbHVzdGVyX2lubmVyIHsNCgkJCWxhYmVsID0gIiAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0XzIiOw0KCQkJe0FjdF8yMSAtPiBBY3RfMjIgW21pbmxlbj0yXTsgcmFuaz1zYW1lO30NCgkJCUFjdF8yMiAtPiBBY3RfMjM7DQoJCQlBY3RfMjIgLT4gQWN0XzI0Ow0KCQkJe0FjdF8yMyAtPiBBY3RfMjQgW21pbmxlbj0yXTsgcmFuaz1zYW1lO30NCgkJCUFjdF8yMyAtPiBBY3RfMjU7DQoJCQlBY3RfMjQgLT4gQWN0XzI1Ow0KCQl9DQoJfQ0KCUV4dF8xIC0+IEFjdF8xOw0KCUFjdF8zIC0+IEV4dF8yOw0KCUV4dF8zIC0+IEFjdF8yNDsNCn0NCg==/svg`

### API

`/graph/:dot/:type`

`:dot` is a base64 encoded graphviz input

`:type` is one of `gif`, `jpeg`, `jpg`, `plain`, `plain-ext`, `png`, `ps`, `ps2`, `svg`.

See above for an example.
