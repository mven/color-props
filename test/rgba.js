'use strict';

var expect = require('chai').expect,
    colorProps = require('../');

describe('Color Props', function() {
  describe('#RGB Color Test rgba(219, 39, 128, .25)', function() {

    let rgb = 'rgba(219, 39, 128, .25)';
    let color = colorProps(rgb);

    it('should match hex on object', function(done) {
      let hex = '#db2780';
      expect(hex).to.equal(color.hex);
      done();
    });

    it('should match RGB values in array', function(done) {
      let rgb = [219, 39, 128, 0.25];
      expect(rgb).to.deep.equal(color.rgb);
      done();
    });

    it('should match RGB CSS property', function(done) {
      let rgbCss = 'rgba(219, 39, 128, 0.25)';
      expect(rgbCss).to.equal(color.rgbCss);
      done();
    });

    it('should match HSL values in array', function(done) {
      let hsl = [-30, '71%', '51%', 0.25];
      expect(hsl).to.deep.equal(color.hsl);
      done();
    });

    it('should match HSL CSS property', function(done) {
      let hslCss = 'hsla(-30, 71%, 51%, 0.25)';
      expect(hslCss).to.equal(color.hslCss);
      done();
    });

    it('should have matching r value', function(done) {
      let r = 219;
      expect(r).to.equal(color.r);
      done();
    });

    it('should have matching g value', function(done) {
      let g = 39;
      expect(g).to.equal(color.g);
      done();
    });

    it('should have matching b value', function(done) {
      let b = 128;
      expect(b).to.equal(color.b);
      done();
    });

    it('should have alpha value as null', function(done) {
      let a = 0.25;
      expect(a).to.equal(color.a);
      done();
    });

    it('should have matching h value', function(done) {
      let h = -30;
      expect(h).to.equal(color.h);
      done();
    });

    it('should have matching s value', function(done) {
      let s = '71%';
      expect(s).to.equal(color.s);
      done();
    });

    it('should have matching l value', function(done) {
      let l = '51%';
      expect(l).to.equal(color.l);
      done();
    });

    it('should have matching H value', function(done) {
      let H = -29.666666666666668;
      expect(H).to.equal(color.H);
      done();
    });

    it('should have matching S value', function(done) {
      let S = 0.7142857142857142;
      expect(S).to.equal(color.S);
      done();
    });

    it('should have matching L value', function(done) {
      let L = 0.5058823529411764;
      expect(L).to.equal(color.L);
      done();
    });

  });
});
