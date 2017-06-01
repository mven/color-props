<img src="https://cloud.githubusercontent.com/assets/940113/26662605/c0652612-464a-11e7-8f33-e1a89cf34840.png"/>

# color-props

A utility that returns hex/rgb/hsl properties of a color

### Usage

```bash
npm install color-props --save
```

```javascript
var colorProps = require('color-props');

var color = colorProps('#abcdef');

// returned color object
{ 
  hex: '#abcdef',
  rgb: [ 171, 205, 239 ],
  rgbCss: 'rgb(171, 205, 239)',
  hsl: [ 210, '68%', '80%' ],
  hslCss: 'hsl(210, 68%, 80%)',
  r: 171,
  g: 205,
  b: 239,
  a: null,
  h: 210,
  s: '68%',
  l: '80%',
  H: 210,
  S: 0.6800000000000003,
  L: 0.803921568627451
}
```

### Supported color inputs

color-props supports the following for inputs:

Hexadecimal

```javascript
var color = colorProps('#abcdef');
```

Shorthand Hex

```javascript
var color = colorProps('#abc');
```

rgb

```javascript
var color = colorProps('rgb(123, 45, 67)'); // or
var color = colorProps('123, 45, 67');
```

rgba

```javascript
var color = colorProps('rgba(123, 45, 67, .25)'); // or
var color = colorProps('123, 45, 67, .25');
```

### Notes
The difference in the h/s/l and H/S/L properties in the color object is that the ones in caps are the raw numbers from the calculations.

## TODO
- Add HSL input
