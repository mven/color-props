'use strict';

var stripRgbValues = function(color) {

  var rgb;

  let colorIsWrapped = (/^rgba?\(/.test(color));

  if (colorIsWrapped) {
    var re = /^(rgba?\()(.+)(\))$/i;
    var color = color.replace(re, '$2'); // grab the numbers in between parens
  }

  rgb = color.split(/,\s?/);

  var rgbObj = {
    r: +rgb[0],
    g: +rgb[1],
    b: +rgb[2],
    a: +rgb[3] || null
  }

  return rgbObj

};

module.exports = stripRgbValues;
