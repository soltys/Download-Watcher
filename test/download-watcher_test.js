/*global describe,it*/
'use strict';
var expect = require('chai').expect,
  downloadWatcher = require('../lib/download-watcher.js');

describe('download-watcher node module.', function() {
  it('must be awesome', function() {
    expect( downloadWatcher.awesome()).to.be.equal('awesome');
  });
});
