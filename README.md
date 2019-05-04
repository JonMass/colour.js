# ColourJS

A simple JavaScript ES6 class to represent and manipulate a colour via Hex, RGB and HSL

## Usage

### Creating a Colour Instance

Basic constructor and appropriate `static` factory functions are included

```
const colour = new Colour();			//Empty Colour
const colour = Colour.fromHex("#FFFFFF");	//From Hex string (Also supports short-form, #FFF)
const colour = Colour.fromRgb(12, 34, 56);	//From RGB component values
const colour = Colour.fromHsl(12, 34, 56);	//From HSL component values
```

### Accessing and Manipulating a Colour Instance

All property values are kept up-to-date, when values are changed (e.g. updating RGB values recalculates HSL values, and vice-versa)

```
//Reading RGB values

const r = colour.r;	//Number in the range 0-255, inclusive
const g = colour.g;	// ''
const b = colour.b;	// ''

//Writing RGB values

colour.r = 12;
colour.g = 34;
colour.b = 45;

//Reading HSL values

const h = colour.h;	//Number in the range 0-359, inclusive
const s = colour.s;	//Number in the range 0-100, inclusive
const l = colour.l;	// ''

//Writing HSL values

colour.h = 12;
colour.s = 34;
colour.l = 45;

//Writing Hex

colour.parseHex("#FFFFFF");	//As with fromHex(), short-form is supported
```

### String Outputs

To use the colour in a style, use the following `toStringX()` functions

```
const stringHex = colour.toStringHex();	//stringHex = "#FFFFFF"
const stringRgb = colour.toStringRgb();	//stringRgb = "rgb(12, 34, 56)"
const stringHsl = colour.toStringHsl();	//stringHsl = "hsl(12, 34%, 56%)"
```

`Colour` does not contain any properties for alpha, but the following `toStringX()` functions can be used with supplied alpha values

```
const stringRgba = colour.toStringRgba(0.5);	//stringRgba = "rgba(12, 34, 56, 0.5)"
const stringRgba = colour.toStringRgba();	//stringRgba = "rgba(12, 34, 56, 1)"
const stringHsla = colour.toStringHsla(0.5);	//stringHsla = "hsla(12, 34%, 56%, 0.5)"
const stringHsla = colour.toStringHsla();	//stringHsla = "hsla(12, 34%, 56%, 1)"
```

## Authors

* **Jon Massey** - *Initial work* - [JonMass](https://github.com/JonMass)
* **Michael Jackson** - *RGB-to-HSL functions* - [Michael Jackson](https://gist.github.com/mjackson)
* **Tim Down** - *Hex-to-RGB function* - [Tim Down](https://stackoverflow.com/users/96100/tim-down)

See also the list of [contributors](https://github.com/JonMass/ColourJS/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

*  [Michael Jackson](https://gist.github.com/mjackson) - RGB-to-HSL functions [Gist](https://gist.github.com/mjackson/5311256)
*  [Tim Down](https://stackoverflow.com/users/96100/tim-down) - Hex-to-RGB function [StackOverflow](https://stackoverflow.com/a/5624139)