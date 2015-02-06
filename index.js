var extend = require('extend');
var request = require('superagent');

function Client() {
  this._apiToken = '';
  this._baseUrl = 'https://api.compose.io/';
  this._data = {};
  this._method = '';
  this._segments = [];
  this._version = '2014-06';
}

Client.prototype.accounts = function () {
  this._segments.push('accounts');
  return this;
};

Client.prototype.account = function (id) {
  this._segments.push(id);
  return this;
};

Client.prototype.apiToken = function (token) {
  this._apiToken = token;
  return this;
};

Client.prototype.database = function (db) {
  this._segments.push(db);
  return this;
};

Client.prototype.deployments = function () {
  this._segments.push('deployments');
  return this;
};

Client.prototype.deployment = function (id) {
  this._segments.push(id);
  return this;
};

Client.prototype.elastic = function () {
  this._segments.push('elastic');
  return this;
};

Client.prototype.end = function (callback) {
  var url = this.url();

  request[this._method](url)
    .set('Accept-Version', this._version)
    .set('Authorization', 'Bearer ' + this._apiToken)
    .send(this._data)
    .end(callback);
};

Client.prototype.get = function () {
  this._method = 'get';
  return this;
};

Client.prototype.patch = function () {
  this._method = 'patch';
  return this;
};

Client.prototype.post = function () {
  this._method = 'post';
  return this;
};

Client.prototype.send = function (data) {
  extend(true, this._data, data);
};

Client.prototype.type = function (type) {
  this._segments.push(type);
  return this;
};

Client.prototype.url = function () {
  return this._baseUrl + this._segments.join('/');
};

Client.prototype.users = function () {
  this._segments.push('users');
  return this;
};

Client.prototype.user = function (user) {
  this._segments.push(user);
  return this;
};

Client.prototype.version = function (version) {
  if (!version) return this._version;
  this._version = version;
  return this;
};

module.exports = function () {
  return new Client();
};
