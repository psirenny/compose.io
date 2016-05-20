compose.io
==========

Compose.io REST API client.

[![Build Status](https://travis-ci.org/psirenny/compose.io.png?branch=master)](https://travis-ci.org/psirenny/compose.io)

Installation
------------

    npm install compose.io --save

Example
-------

    var compose = require('compose.io');

    // create a db user
    compose()
      .accessToken('...')
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
