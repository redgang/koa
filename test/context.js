
var Context = require('../lib/context');
var request = require('supertest');
var assert = require('assert');
var koa = require('..');
var fs = require('fs');

function context(req, res) {
  req = req || { headers: {} };
  res = res || { _headers: {} };
  res.setHeader = function(k, v){ res._headers[k.toLowerCase()] = v };
  var ctx = new Context({}, req, res);
  return ctx;
}

module.exports = context;