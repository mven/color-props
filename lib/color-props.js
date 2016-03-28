'use strict';

var hexToRgb = require('../util/hexToRgb');
var stripRgbValues = require('../util/stripRgbValues');

function formatCss(colorObj) {

  colorObj.a == null ? delete colorObj.a : null;

  var values = [],
      flatValues;

  for (let prop in colorObj) {
    values.push(colorObj[prop]);
  }

  flatValues = values.join(', ');

  if (colorObj.hasOwnProperty('h')) {
    values.length === 3
      ? colorObj.css = 'hsl('+flatValues+')'
      : colorObj.css = 'hsla('+flatValues+')';
  } else {
    values.length === 3
      ? colorObj.css = 'rgb('+flatValues+')'
      : colorObj.css = 'rgba('+flatValues+')';
  }

  colorObj.values = values;

  return colorObj;
}

function colorProps(color) {

  var hex,
      rgb,
      rgbObj,
      hsl,
      hslObj,
      R,
      G,
      B,
      H,
      S,
      L,
      cmax,
      cmin,
      delta,
      props;

  // hex
  if (typeof color === 'string' && /^#/.test(color)) {
    rgb = hexToRgb(color);
    rgbObj = formatCss(rgb);
    hex = color;
  }

  // rgb
  if (typeof color === 'string' && /^(rgba?\()?[0-9]+,\s?[0-9]+,\s?[0-9]+\s?(,\s?[0-1|\.]([0-9]+|\.[0-9]+)?)?(\))?$/.test(color)) {
    rgb = stripRgbValues(color);
    rgbObj = formatCss(rgb);
    hex = '#'+rgbObj.r.toString(16)+rgbObj.g.toString(16)+rgbObj.b.toString(16);
  }

  R = rgbObj.r / 255;
  G = rgbObj.g / 255;
  B = rgbObj.b / 255;

  cmax = Math.max(R, G, B);
  cmin = Math.min(R, G, B);
  delta = cmax - cmin;

  if ( cmax === cmin ) {
    // achromatic
    H = 0;
  } else {
    // hue
    switch (cmax) {
      case 0: {
        H = 0;
        break;
      }
      case R: {
        H = ( ( (G - B) / delta ) % 6 ) * 60;
        break;
      }
      case G: {
        H = ( ( (B - R) / delta ) + 2 ) * 60;
        break;
      }
      case B: {
        H = ( ( (R - G) / delta ) + 4 ) * 60;
        break;
      }
    }
  }

  // lightness - needed before saturation
  L = ((cmax + cmin) / 2);

  // saturation
  if (delta == 0) {
    S = 0;
  } else {
    S = delta / ( 1 - Math.abs( (2 * L) - 1 ) );
  }


  hsl = {
    h: Math.round(H),
    s: Math.round(S*100) + '%',
    l: Math.round(L*100) + '%',
    a: rgbObj.a || null
  }

  hslObj = formatCss(hsl);

  props = {
    hex,
    rgb: rgbObj.values,
    rgbCss: rgbObj.css,
    hsl: hslObj.values,
    hslCss: hslObj.css,
    r: rgbObj.r,
    g: rgbObj.g,
    b: rgbObj.b,
    a: rgbObj.a || null,
    h: Math.round(H),
    s: Math.round(S*100) + '%',
    l: Math.round(L*100) + '%',
    H,
    S,
    L
  }

  return props;
}

module.exports = colorProps;
