var lib = require('./');
var test = require('tape');

test('lib', function (t) {
  t.plan(2);
  t.equal(typeof lib, 'function');
  var client = lib();
  t.equal(typeof client, 'object');
});

test('accounts', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.accounts, 'function');
  client.accounts();
  t.equal(client._segments[0], 'accounts');
});

test('account', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.account, 'function');
  client.account('foo');
  t.equal(client._segments[0], 'foo');
});

test('apiToken', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.apiToken, 'function');
  client.apiToken('foo');
  t.equal(client._apiToken, 'foo');
});

test('database', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.database, 'function');
  client.database('foo');
  t.equal(client._segments[0], 'foo');
});

test('deployments', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.deployments, 'function');
  client.deployments();
  t.equal(client._segments[0], 'deployments');
});

test('deployment', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.deployment, 'function');
  client.deployment('foo');
  t.equal(client._segments[0], 'foo');
});

test('elastic', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.elastic, 'function');
  client.elastic();
  t.equal(client._segments[0], 'elastic');
});

test('end', function (t) {
  t.plan(1);
  var client = lib();
  t.equal(typeof client.end, 'function');
});

test('get', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.get, 'function');
  client.get();
  t.equal(client._method, 'get');
});

test('patch', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.patch, 'function');
  client.patch();
  t.equal(client._method, 'patch');
});

test('post', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.post, 'function');
  client.post();
  t.equal(client._method, 'post');
});

test('send', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.send, 'function');
  client.send({foo: 'bar'});
  client.send({baz: 'qux'});
  t.deepEqual(client._data, {foo: 'bar', baz: 'qux'});
});

test('type', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.type, 'function');
  client.type('foo');
  t.equal(client._segments[0], 'foo');
});

test('url', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.url, 'function');
  t.equal(client.url(), 'https://api.compose.io/');
});

test('users', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.user, 'function');
  client.users();
  t.equal(client._segments[0], 'users');
});

test('user', function (t) {
  t.plan(2);
  var client = lib();
  t.equal(typeof client.user, 'function');
  client.user('foo');
  t.equal(client._segments[0], 'foo');
});

test('version', function (t) {
  t.plan(3);
  var client = lib();
  t.equal(typeof client.version, 'function');
  t.equal(client.version(), '2014-06');
  client.version('foo');
  t.equal(client._version, 'foo');
});

test('complicated query', function (t) {
  t.plan(1);

  var url = lib()
    .deployments()
    .account(':account')
    .deployment(':deployment')
    .type('mongodb')
    .database(':database')
    .users()
    .url();

  t.equal(url, 'https://api.compose.io/deployments/:account/:deployment/mongodb/:database/users');
});

test('list all accounts', function (t) {
  t.plan(3);

  lib()
    .apiToken(process.env.COMPOSE_IO_API_TOKEN)
    .get()
    .accounts()
    .end(function (err, res) {
      t.equal(err, null);
      t.equal(typeof res, 'object');
      t.equal(typeof res.body, 'object');
    });
});
