import {parseStyle} from './parse'

export const getSystemTheme = () => {
    try {
        return JSON.parse(sessionStorage.getItem('systemTheme')) || {};
    } catch {
        return {};
    }
};

export const getSystemThemeByDom = () => {
    const cssText = document.querySelector(':root').style.cssText;
    const cssObject = {};
    if (cssText) {
        cssText
            .split('; ')
            .forEach(style =>
                cssObject[parseStyle(style)[0]] = parseStyle(style)[1]
            )
    }
    return cssObject;
};

export const setSystemTheme = themeOrThemeObject => {
    let _systemThemeAttribute = '';
    if (Object.prototype.toString.call(themeOrThemeObject).slice(8, -1) === 'Object')
        Object.entries(themeOrThemeObject).forEach(keyVal => _systemThemeAttribute += `${keyVal[0]}: ${keyVal[1]};`);
    else {
        _systemThemeAttribute += `--systemThemeColor: ${themeOrThemeObject};`;
        for (let i = 1; i <= 9; i++) {
            _systemThemeAttribute += `--systemThemeColorLight${i}: ${mix('#ffffff', rgb2hex(themeOrThemeObject), i * 10)};`;
        }
    }
    document.querySelector(':root').setAttribute('style', _systemThemeAttribute);
    saveSystemTheme(getSystemThemeByDom());
};

export const saveSystemTheme = themeObject => themeObject && sessionStorage.setItem('systemTheme', JSON.stringify(themeObject));

/**
 * js version of Scss's mix() function
 * @param color_1
 * @param color_2
 * @param weight color_1's weight, it means 50% for each if this argument is omitted
 * @returns {string}
 */
const mix = (color_1, color_2, weight = 50) => {
    color_1 = color_1.replace(/#/g, '');
    color_2 = color_2.replace(/#/g, '');
    // convert a decimal value to hex
    const d2h = d => d.toString(16);
    // convert a hex value to decimal
    const h2d = h => parseInt(h, 16);

    let color = "#";
    // loop through each of the 3 hex pairs—red, green, and blue
    for (let i = 0; i <= 5; i += 2) {
        const v1 = h2d(color_1.slice(i, i + 2));
        const v2 = h2d(color_2.slice(i, i + 2));

        // combine the current pairs from each source color, according to the specified weight
        let val = d2h(Math.round(v2 + (v1 - v2) * (weight / 100.0)));
        // prepend a '0' if val results in a single digit
        while (val.length < 2) {
            val = '0' + val;
        }
        // concatenate val to our new color string
        color += val;
    }
    return color;
};

const rgb2hex = rgb => {
    const rgba = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d\.]+))?\)$/);
    if (!rgba) return rgb;

    const hex = x => ("0" + parseInt(x).toString(16)).slice(-2);
    return (hex(rgba[1]) + hex(rgba[2]) + hex(rgba[3])).toLowerCase();
};
