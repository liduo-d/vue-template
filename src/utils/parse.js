export const parseStyle = cssText => {
    if (!cssText) {
        return ['', ''];
    }
    return cssText.split(': ');
};
