'use strict';

var expect = require('chai').expect,
    colorProps = require('../');

describe('Color Props', function() {
  describe('#Hex Color Test (#5596E6)', function() {

    let hex = '#5596E6';
    let color = colorProps(hex);

    it('should match hex on object', function(done) {
      expect(hex).to.equal(color.hex);
      done();
    });

    it('should match RGB values in array', function(done) {
      let rgb = [85, 150, 230];
      expect(rgb).to.deep.equal(color.rgb);
      done();
    });

    it('should match RGB CSS property', function(done) {
      let rgbCss = 'rgb(85, 150, 230)';
      expect(rgbCss).to.equal(color.rgbCss);
      done();
    });

    it('should match HSL values in array', function(done) {
      let hsl = [213, '74%', '62%'];
      expect(hsl).to.deep.equal(color.hsl);
      done();
    });

    it('should match HSL CSS property', function(done) {
      let hslCss = 'hsl(213, 74%, 62%)';
      expect(hslCss).to.equal(color.hslCss);
      done();
    });

    it('should have matching r value', function(done) {
      let r = 85;
      expect(r).to.equal(color.r);
      done();
    });

    it('should have matching g value', function(done) {
      let g = 150;
      expect(g).to.equal(color.g);
      done();
    });

    it('should have matching b value', function(done) {
      let b = 230;
      expect(b).to.equal(color.b);
      done();
    });

    it('should have alpha value as null', function(done) {
      let a = null;
      expect(a).to.equal(color.a);
      done();
    });

    it('should have matching h value', function(done) {
      let h = 213;
      expect(h).to.equal(color.h);
      done();
    });

    it('should have matching s value', function(done) {
      let s = '74%';
      expect(s).to.equal(color.s);
      done();
    });

    it('should have matching l value', function(done) {
      let l = '62%';
      expect(l).to.equal(color.l);
      done();
    });

    it('should have matching H value', function(done) {
      let H = 213.10344827586206;
      expect(H).to.equal(color.H);
      done();
    });

    it('should have matching S value', function(done) {
      let S = 0.7435897435897436;
      expect(S).to.equal(color.S);
      done();
    });

    it('should have matching L value', function(done) {
      let L = 0.6176470588235294;
      expect(L).to.equal(color.L);
      done();
    });

  });
});
