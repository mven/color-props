'use strict';

var should = require('chai').should(),
    expect = require('chai').expect,
    colorProps = require('../');

describe('Color Props', function() {

  describe('#Color Props Object', function() {

    let color = colorProps('#c0ffee');

    it('should have a string value for the hex property', function(done) {
      color.hex.should.be.a('string');
      done();
    });

    it('should have an array for the rgb property', function(done) {
      color.rgb.should.be.a('array');
      done();
    });

    it('should have a string for rgbClass property', function(done) {
      color.rgbCss.should.be.a('string');
      done();
    });

    it('should have an array for the hsl property', function(done) {
      color.hsl.should.be.a('array');
      done();
    });

    it('should have a string for hslCss property', function(done) {
      color.hslCss.should.be.a('string');
      done();
    });

    it('should have a number for the r property', function(done) {
      color.r.should.be.a('number');
      done();
    });

    it('should have a number for the g property', function(done) {
      color.g.should.be.a('number');
      done();
    });

    it('should have a number for the b property', function(done) {
      color.b.should.be.a('number');
      done();
    });

    it('should have a null value for the a property', function(done) {
      expect(color.a).to.be.a('null');
      done();
    });

    it('should have a number for the h property', function(done) {
      color.h.should.be.a('number');
      done();
    });

    it('should have a string for s property', function(done) {
      color.s.should.be.a('string');
      done();
    });

    it('should have a string for l property', function(done) {
      color.l.should.be.a('string');
      done();
    });

    it('should have a number for the H property', function(done) {
      color.H.should.be.a('number');
      done();
    });

    it('should have a number for the S property', function(done) {
      color.S.should.be.a('number');
      done();
    });

    it('should have a number for the L property', function(done) {
      color.L.should.be.a('number');
      done();
    });

  });
});
