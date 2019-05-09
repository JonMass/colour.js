/*! ColourJS - https://github.com/JonMass/ColourJS - (c) 2019 DevMass */

/**
 * A class to represent a colour
 *
 * @public
 * @property {number} r The r-value of the colour, in the range 0-255, inclusive
 * @property {number} g The g-value of the colour, in the range 0-255, inclusive
 * @property {number} b The b-value of the colour, in the range 0-255, inclusive
 * @property {number} h The h-value of the colour, in the range 0-359, inclusive
 * @property {number} s The s-value of the colour, in the range 0-100, inclusive
 * @property {number} l The l-value of the colour, in the range 0-100, inclusive
 */
class Colour
{
	//Constructor
	//-------------------------------------------------------------------------

	/**
	 * Creates a new Colour instance
	 *
	 * @public
	 * @constructor
	 * @param {Colour} [colour=null] Another Colour instance to copy values from
	 */
    constructor(colour = null)
    {
		//Initialise RGB Fields

		/**
		 * @private
		 * @property {number} _r The r-value of the colour, in the range 0-255, inclusive
		 */
        this._r = (((colour != null) && (typeof colour === "object") && ("_r" in colour) && (typeof colour._r === "number")) ? colour._r : 0);

		/**
		 * @private
		 * @property {number} _g The g-value of the colour, in the range 0-255, inclusive
		 */
        this._g = (((colour != null) && (typeof colour === "object") && ("_g" in colour) && (typeof colour._g === "number")) ? colour._g : 0);

		/**
		 * @private
		 * @property {number} _b The b-value of the colour, in the range 0-255, inclusive
		 */
        this._b = (((colour != null) && (typeof colour === "object") && ("_b" in colour) && (typeof colour._b === "number")) ? colour._b : 0);

        //Initialise HSL Fields

		/**
		 * @private
		 * @property {number} _h The h-value of the colour, in the range 0-359, inclusive
		 */
        this._h = (((colour != null) && (typeof colour === "object") && ("_h" in colour) && (typeof colour._h === "number")) ? colour._h : 0);

		/**
		 * @private
		 * @property {number} _s The s-value of the colour, in the range 0-100, inclusive
		 */
        this._s = (((colour != null) && (typeof colour === "object") && ("_s" in colour) && (typeof colour._s === "number")) ? colour._s : 0);

		/**
		 * @private
		 * @property {number} _l The l-value of the colour, in the range 0-100, inclusive
		 */
        this._l = (((colour != null) && (typeof colour === "object") && ("_l" in colour) && (typeof colour._l === "number")) ? colour._l : 0);
    }

	//Accessor Functions
	//-------------------------------------------------------------------------

	/**
	 * The r-value of the colour, in the range 0-255, inclusive
	 *
	 * @public
	 * @type {number}
	 * @returns {number}
	 */
    get r() { return this._r; }

	/**
	 * The r-value of the colour, in the range 0-255, inclusive
	 *
	 * @public
	 * @param {number} value The r-value of the colour, in the range 0-255, inclusive
	 * @type {number}
	 * @returns void
	 */
    set r(value)
	{
		if(typeof value !== "number")
            return;

        this._r = Math.floor(Math.min(Math.max(value, 0), 255));
		this.updateHsl();
    }

	/**
	 * The g-value of the colour, in the range 0-255, inclusive
	 *
	 * @public
	 * @type {number}
	 * @returns {number}
	 */
    get g() { return this._g; }

	/**
	 * The g-value of the colour, in the range 0-255, inclusive
	 *
	 * @public
	 * @param {number} value The g-value of the colour, in the range 0-255, inclusive
	 * @type {number}
	 * @returns void
	 */
    set g(value)
	{
		if(typeof value !== "number")
			return;

        this._g = Math.floor(Math.min(Math.max(value, 0), 255));
		this.updateHsl();
	}

	/**
	 * The b-value of the colour, in the range 0-255, inclusive
	 *
	 * @public
	 * @type {number}
	 * @returns {number}
	 */
	get b() { return this._g; }

	/**
	 * The b-value of the colour, in the range 0-255, inclusive
	 *
	 * @public
	 * @param {number} value The b-value of the colour, in the range 0-255, inclusive
	 * @type {number}
	 * @returns void
	 */
    set b(value)
	{
		if(typeof value !== "number")
			return;

        this._b = Math.floor(Math.min(Math.max(value, 0), 255));
		this.updateHsl();
	}

	/**
	 * The h-value of the colour, in the range 0-359, inclusive
	 *
	 * @public
	 * @type {number}
	 * @returns {number}
	 */
	get h() { return this._h; }

	/**
	 * The h-value of the colour, in the range 0-359, inclusive
	 *
	 * @public
	 * @param {number} value The h-value of the colour, in the range 0-359, inclusive
	 * @type {number}
	 * @returns void
	 */
    set h(value)
	{
		if(typeof value !== "number")
			return;

        this._h = Math.floor(Math.min(Math.max(value, 0), 359));
        this.updateRgb();
	}

	/**
	 * The s-value of the colour, in the range 0-100, inclusive
	 *
	 * @public 
	 * @type {number}
	 * @returns {number}
	 */
	get s() { return this._s; }

	/**
	 * The s-value of the colour, in the range 0-100, inclusive
	 *
	 * @public
	 * @param {number} value The s-value of the colour, in the range 0-100, inclusive
	 * @type {number}
	 * @returns void
	 */
    set s(value)
	{
		if(typeof value !== "number")
			return;

        this._s = Math.floor(Math.min(Math.max(value, 0), 100));
		this.updateRgb();
	}

	/**
	 * The l-value of the colour, in the range 0-100, inclusive
	 *
	 * @public
	 * @type {number}
	 * @returns {number}
	 */
	get l() { return this._l; }

	/**
	 * The l-value of the colour, in the range 0-100, inclusive
	 *
	 * @public
	 * @param {number} value The l-value of the colour, in the range 0-100, inclusive
	 * @type {number}
	 * @returns void
	 */
    set l(value)
	{
		if(typeof value !== "number")
			return;

        this._l = Math.floor(Math.min(Math.max(value, 0), 100));
		this.updateRgb();
    }

	//Related Colour Functions
	//-------------------------------------------------------------------------
	
	/**
	 * Returns a new Colour instance that is lighter than this instance, by the specified percentage
	 *
	 * @param {number} [amount=0.05] The percentage amount that the returned Colour should be lighter than this instance, in the range 0-1, inclusive
	 * @param {boolean} [relative=false] Indicates if the adjustment should be made relative to the Colour's current lightness or not
	 * @returns {Colour} A new Colour instance that is lighter than this instance, by the specified percentage
	 */
    lighter(amount = 0.05, relative = false)
	{
		const newColour = new Colour(this);

		if((typeof amount === "number") && (typeof relative === "boolean"))
		{
			amount = Math.min(Math.max(amount, 0), 1);
			newColour.l += (relative ? (newColour.l * amount) : amount);
		}

		return newColour;
	}
	
	/**
	 * Returns a new Colour instance that is darker than this instance, by the specified percentage
	 *
	 * @param {number} [amount=0.05] The percentage amount that the returned Colour should be darker than this instance, in the range 0-1, inclusive
	 * @param {boolean} [relative=false] Indicates if the adjustment should be made relative to the Colour's current darkness or not
	 * @returns {Colour} A new Colour instance that is darker than this instance, by the specified percentage
	 */
	darker(amount = 0.05, relative = false)
	{
		const newColour = new Colour(this);

		if((typeof amount === "number") && (typeof relative === "boolean"))
		{
			amount = Math.min(Math.max(amount, 0), 1);
			newColour.l -= (relative ? (newColour.l * amount) : amount);
		}

		return newColour;
	}

	//Update Functions
	//-------------------------------------------------------------------------

	/**
	 * Updates the colour's HSL values, from the current RGB values
	 *
	 * Based on this {@link https://gist.github.com/mjackson/5311256 | Gist} on GitHub
	 * Credit: {@link https://gist.github.com/mjackson | Michael Jackson}
	 *
	 * @private
	 * @returns void
	 */
    updateHsl()
    {
		//Reset H and S
		this._h = 0;
		this._s = 0;

		//Normalise RGB
		const nr = this._r / 255;
        const ng = this._g / 255;
        const nb = this._b / 255;

		//Determin Min/Max
		const max = Math.max(nr, ng, nb);
		const min = Math.min(nr, ng, nb);

		//Calculate L
		this._l = ((max + min) / 2);

		//Check for Balance
        if(max !== min)
		{
			const d = max - min;
			this._s = ((this._l > 0.5) ? (d / (2 - max - min)) : (d / (max + min)));

			//Check Max-Case to Calculate H
            switch(max)
			{
				case nr:
					this._h = (ng - nb) / d + ((ng < nb) ? 6 : 0);
					break;

				case ng:
					this._h = (nb - nr) / d + 2;
					break;

				case nb:
					this._h = (nr - ng) / d + 4;
					break;
			}

			//Limit R
			this._h /= 6;
		}

		//Range and Clamp HSL Values
        this._s = Math.round(this._s * 100);
        this._l = Math.round(this._l * 100);
        this._h = Math.round(this._h * 360);
    }

	/**
	 * Updates the colour's RGB values, from the current HSL values
	 *
	 * Based on this {@link https://gist.github.com/mjackson/5311256 | Gist} on GitHub
	 * Credit: {@link https://gist.github.com/mjackson | Michael Jackson}
	 *
	 * @private
	 * @returns void
	 */
    updateRgb()
    {
		//Reset RGB
        this._r = 0;
        this._g = 0;
        this._b = 0;

		//Normalise HSL
        const nh = (this._h / 359);
        const ns = (this._s / 100);
        const nl = (this._l / 100);

		//Check for Achromatic
        if(ns === 0)
		{
            this._r = this._g = this._b = nl;
		}
        else
        {
			//Declare Hue-to-RGB
            const hue2Rgb = function(p, q, t)
			{
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			}

			//Calculate P and Q
			const q2 = ((nl < 0.5) ? nl * (1 + ns) : nl + ns - nl * ns);
            const p2 = 2 * nl - q2;

			//Calculate RGB Values
			this._r = hue2Rgb(p2, q2, nh + 1 / 3);
			this._g = hue2Rgb(p2, q2, nh);
            this._b = hue2Rgb(p2, q2, nh - 1 / 3);
		}

		//Range and Clamp RGB Values
        this._r = Math.round(this._r * 255);
        this._g = Math.round(this._g * 255);
        this._b = Math.round(this._b * 255);
	}

	//Output Functions
	//-------------------------------------------------------------------------

	/**
	 * Returns a hexadecimal string containing the colour
	 *
	 * @returns {string} A hexadecimal string containing the colour
	 */
    toStringHex()
	{
        return `#${((1 << 24) + (this._r << 16) + (this._g << 8) + this._b).toString(16).slice(1)}`;
    }

	/**
	 * Returns an rgb string containing the colour
	 *
	 * @returns {string} An rgb string containing the colour
	 */
    toStringRgb()
	{
		return `rgb(${this._r}, ${this._g}, ${this._b})`;
    }

	/**
	 * Returns an rgba string containing the colour
	 *
	 * @param {number} [a=1] The alpha value to include in the string, in the range 0-1, inclusive
	 * @returns {string} An rgba string containing the colour
	 */
    toStringRgba(a)
	{
		if(a !== "number")
            a = 1;
		
        return `rgba(${this._r}, ${this._g}, ${this._b}, ${Math.min(Math.max(a, 0), 1)})`;
	}

	/**
	 * Returns a hsl string containing the colour
	 *
	 * @returns {string} A hsl string containing the colour
	 */
    toStringHsl()
	{
		return `hsl(${this._h}, ${this._s}%, ${this._l}%)`;
	}

	/**
	 * Returns a hsla string containing the colour
	 *
	 * @param {number} [a=1] The alpha value to include in the string, in the range 0-1, inclusive
	 * @returns {string} A hsla string containing the colour
	 */
    toStringHsla(a)
	{
		if(a !== "number")
            a = 1;
		
        return `hsla(${this._h}, ${this._s}%, ${this._l}%, ${Math.min(Math.max(a, 0), 1)})`;
	}

	//Parse Functions
	//-------------------------------------------------------------------------

	/**
	 * Parses a hexadecimal colour string into the Colour instance
	 * 
	 * Based on this {@link https://stackoverflow.com/a/5624139 | StackOverflow} answer
	 * Credit: {@link https://stackoverflow.com/users/96100/tim-down | Tim Down}
	 *
	 * @public
	 * @param {string} hex A string containing a hexadecimal colour
	 * @returns void
	 */
    parseHex(hex)
    {
		if(typeof hex !== "string")
            return;

		//Expand Short Hex into Long-Form
        hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(m, r, g, b)
		{
			return r + r + g + g + b + b;
		});

		//Parse Long-Form Hex
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if(result)
		{
            this._r = parseInt(result[1], 16);
            this._g = parseInt(result[2], 16);
            this._b = parseInt(result[3], 16);

			this.updateHsl();
        }
    }

	//Static Factory Functions
	//-------------------------------------------------------------------------

	/**
	 * Creates a new Colour instance and initialises it to the value in the supplied hexadecimal colour string
	 *
	 * @public
	 * @param {string} hex A string containing a hexadecimal colour
	 * @returns {Colour} A new Colour instance, initialised to the value in the supplied hexadecimal colour string
	 */
    static fromHex(hex)
	{
        const colour = new Colour();

		if(typeof hex === "string")
            colour.parseHex(hex);

		return colour;
    }

	/**
	 * Creates a new Colour instance and initialises it to the supplied RGB values
	 *
	 * @public 
	 * @param {number} r The r-value of the colour, in the range 0-255, inclusive
	 * @param {number} g The g-value of the colour, in the range 0-255, inclusive
	 * @param {number} b The b-value of the colour, in the range 0-255, inclusive
	 * @returns {Colour} A new Colour instance, initialised to the supplied RGB values
	 */
    static fromRgb(r, g, b)
	{
		const colour = new Colour();

		if(typeof r === "number")
            colour._r = Math.floor(Math.min(Math.max(r, 0), 255));

		if(typeof g === "number")
            colour._g = Math.floor(Math.min(Math.max(g, 0), 255));

		if(typeof b === "number")
            colour._b = Math.floor(Math.min(Math.max(b, 0), 255));

        colour.updateHsl();
		return colour;
    }

	/**
	 * Creates a new Colour instance and initialises it to the supplied HSL values
	 *
	 * @public 
	 * @param {number} h The h-value of the colour, in the range 0-359, inclusive
	 * @param {number} s The s-value of the colour, in the range 0-100, inclusive
	 * @param {number} l The l-value of the colour, in the range 0-100, inclusive
	 * @returns {Colour} A new Colour instance, initialised to the supplied HSL values
	 */
    static fromHsl(h, s, l)
	{
        const colour = new Colour();

		if(typeof h === "number")
            colour._h = Math.floor(Math.min(Math.max(h, 0), 359));

		if(typeof s === "number")
            colour._s = Math.floor(Math.min(Math.max(s, 0), 100));

		if(typeof l === "number")
            colour._l = Math.floor(Math.min(Math.max(l, 0), 100));

        colour.updateRgb();
		return colour;
	}
}