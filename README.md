compose.io
==========

Compose.io REST API client.

Installation
------------

    npm install compose.io --save

Example
-------

    var compose = require('compose.io');

    // create an elastic database deployment
    compose()
      .apiToken('...')
      .post()
      .deployments()
      .account('...')
      .deployment('...')
      .type('mongodb')
      .database('...')
      .users()
      .send({username: '...'})
      .send({password: '...'})
      .end(function (err, res) {
        // do something  
      })
