'use strict';

var R = require('ramda');
var method = require('./method');

var resources = require('./resources');

clara.DEFAULT_HOST = 'https://clara.io'
clara.DEFAULT_BASE_PATH = '/api';

clara.VERSION = require('../package.json').version;

function clara(authKey, username, opts) {
  if (!opts) opts = {};

  var options = {
    authKey: authKey,
    username: username,
    host: opts.host || clara.DEFAULT_HOST,
    basePath: opts.basePath || clara.DEFAULT_BASE_PATH
  };

  var apiMethod = R.curry(method)(options);

  return R.mapObjIndexed(R.mapObjIndexed(apiMethod), resources);
}

module.exports = clara;