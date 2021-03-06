'use strict';

const expect = require ('chai').expect;
const config = require ('../../../../tests/config.js');
const utils = require ('../../../../lib/utils') (config);
const exportModule = require ('../../../../lib/arms/export.js');

describe ('arms#exportarms', function () {
  it ('should be a function', function () {
    expect (exportModule).to.be.a ('function');
  });

  var exportArms = exportModule (utils);

  it ('should return a function', function () {
    expect (exportArms).to.be.a ('function');
  });

  it ('should return arms', function (done) {
    exportArms (function (err, res) {
      if (err)
        return done (err);

      expect (res).to.be.an ('array');
      expect (res[0]).to.have.property ('arm_num');
      return done ();
    });
  });

  it ('should return specified arms', function (done) {
    var params = {
      arms: ['1']
    };
    exportArms (params, function (err, res) {
      if (err)
        return done (err);

      expect (res).to.be.a ('array').of.length (1);
      expect (res[0]).to.have.property ('arm_num');
      return done ();
    });
  });
});
