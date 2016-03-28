'use strict';

var hexToRgb = function(color) {

  let colorIsHex = (/^#/.test(color) && /^#[a-f0-9]+/i.test(color));

  if (colorIsHex && color.length === 7) {

    let r = parseInt( color.slice(1,3), 16 );
    let g = parseInt( color.slice(3,5), 16 );
    let b = parseInt( color.slice(5,7), 16 );

    return {r, g, b};

  } else if (colorIsHex && color.length === 4) {

    // shorthand
    let r = parseInt( String(color.slice(1,2)+color.slice(1,2)), 16 );
    let g = parseInt( String(color.slice(2,3)+color.slice(2,3)), 16 );
    let b = parseInt( String(color.slice(3,4)+color.slice(3,4)), 16 );

    return {r, g, b};

  } else {
    throw new Error('Not a valid hexadecimal color: ' + color);
  }

};

module.exports = hexToRgb;
