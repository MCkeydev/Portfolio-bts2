
type TColorType = 'hsl'|'hsla'|'rgb'|'rgba'|'hex';

/**
 * @param color: css color string;
 * @returns The color type ('hsl, 'hsla', 'rgb', 'rgba', 'hex');
 *
 * @throws Error if the color format is not supported.
 */
export const checkColorFormat = (color: string): TColorType|undefined => {
    const errorMessage = 'alpha only accepts css color types : hsl | hsla | rgb | rgba | hex';

    // Regexps to match all supported formats.
    const hslRegex = /hsl\( *?[\d]{1,3} *?, *?[\d]{1,3}(.?[\d]{1,2})?% *?, *?[\d]{1,3}(.?[\d]{1,2})?% *?\)/;
    const hslaRegex = /hsla\( *?[\d]{1,3} *?, *?[\d]{1,3}(.?[\d]{1,2})?% *?, *?[\d]{1,3}().?([\d]{1,2})?%? *?, *?[0-1]\.?([\d]{1,3})? *?\)/;
    const rgbRegex = /^(rgb)?\( *?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5]) *?\)?)$/;
    const rgbaRegex = /^(rgba)?\( *?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5]) *?, *?[0-1]\.?([\d]{1,3})? *?\)?)$/;
    const hexRegex = /^#[0-9|a-z]{6} *?$/i;

    if(color.match(hexRegex)){

        return 'hex';
    } else if(color.match(hslRegex)) {

        return 'hsl';
    } else if(color.match(hslaRegex)) {

        return 'hsla';
    } else if(color.match(rgbRegex)) {

        return 'rgb';
    } else if(color.match(rgbaRegex)) {

        return 'rgba';
    } else {

        throw new Error(errorMessage);
    };
};

export const alpha = (color: string, alpha: number) => {
    try {
        // We check if the color string is in a supported format
        const colorFormat = checkColorFormat(color);
        let splitColor: Array<string>;
        let alphaColor: string;

        // different treatment depending on color format
        switch(colorFormat){
            case 'rgb':
                splitColor = color.replace('rgb', 'rgba').split(')');
                splitColor.push(`, ${alpha})`);
                alphaColor = splitColor.join('');

                return alphaColor;
            case 'rgba':
                splitColor = color.split(',');
                splitColor[splitColor.length - 1] = ` ${String(alpha)})`;
                alphaColor = splitColor.join(',');

                return alphaColor;
            case 'hsl':
                splitColor = color.replace('hsl', 'hsla').split(')');
                splitColor.push(`, ${alpha})`);
                alphaColor = splitColor.join('');

                return alphaColor;
            case 'hsla':
                splitColor = color.split(',');
                splitColor[splitColor.length - 1] = ` ${String(alpha)})`;
                alphaColor = splitColor.join(',');

                return alphaColor;
            case 'hex':
                splitColor = color.replace('#', '').split('');

                // we convert hex base to 16 base
                return alphaColor = 'rgba(' +
                    parseInt(splitColor[0] + splitColor[1], 16) + ', ' +
                    parseInt(splitColor[2] + splitColor[3], 16) + ', ' +
                    parseInt(splitColor[4] + splitColor[5], 16) + ', ' +
                    alpha + ')';
        };
    } catch (error) {
        // If the color is not a supported format, we throw
        console.error(error);
    };
};

const colors = {
    blackA: {
        blackA1: 'hsla(0, 0%, 0%, 0.012)',
        blackA2: 'hsla(0, 0%, 0%, 0.027)',
        blackA3: 'hsla(0, 0%, 0%, 0.047)',
        blackA4: 'hsla(0, 0%, 0%, 0.071)',
        blackA5: 'hsla(0, 0%, 0%, 0.090)',
        blackA6: 'hsla(0, 0%, 0%, 0.114)',
        blackA7: 'hsla(0, 0%, 0%, 0.141)',
        blackA8: 'hsla(0, 0%, 0%, 0.220)',
        blackA9: 'hsla(0, 0%, 0%, 0.439)',
        blackA10: 'hsla(0, 0%, 0%, 0.478)',
        blackA11: 'hsla(0, 0%, 0%, 0.565)',
        blackA12: 'hsla(0, 0%, 0%, 0.910)',
    },
    whiteA: {
        whiteA1: 'hsla(0, 0%, 100%, 0)',
        whiteA2: 'hsla(0, 0%, 100%, 0.013)',
        whiteA3: 'hsla(0, 0%, 100%, 0.034)',
        whiteA4: 'hsla(0, 0%, 100%, 0.056)',
        whiteA5: 'hsla(0, 0%, 100%, 0.086)',
        whiteA6: 'hsla(0, 0%, 100%, 0.124)',
        whiteA7: 'hsla(0, 0%, 100%, 0.176)',
        whiteA8: 'hsla(0, 0%, 100%, 0.249)',
        whiteA9: 'hsla(0, 0%, 100%, 0.386)',
        whiteA10: 'hsla(0, 0%, 100%, 0.446)',
        whiteA11: 'hsla(0, 0%, 100%, 0.592)',
        whiteA12: 'hsla(0, 0%, 100%, 0.923)',
    },
    mauve: {
        mauve1: 'hsl(300, 20.0%, 99.0%)',
        mauve2: 'hsl(300, 7.7%, 97.5%)',
        mauve3: 'hsl(294, 5.5%, 95.3%)',
        mauve4: 'hsl(289, 4.7%, 93.3%)',
        mauve5: 'hsl(283, 4.4%, 91.3%)',
        mauve6: 'hsl(278, 4.1%, 89.1%)',
        mauve7: 'hsl(271, 3.9%, 86.3%)',
        mauve8: 'hsl(255, 3.7%, 78.8%)',
        mauve9: 'hsl(252, 4.0%, 57.3%)',
        mauve10: 'hsl(253, 3.5%, 53.5%)',
        mauve11: 'hsl(252, 4.0%, 44.8%)',
        mauve12: 'hsl(260, 25.0%, 11.0%)',
    },
    indigoDark: {
        indigoDark1: 'hsl(229, 24.0%, 10.0%)',
        indigoDark2: 'hsl(230, 36.4%, 12.9%)',
        indigoDark3: 'hsl(228, 43.3%, 17.5%)',
        indigoDark4: 'hsl(227, 47.2%, 21.0%)',
        indigoDark5: 'hsl(227, 50.0%, 24.1%)',
        indigoDark6: 'hsl(226, 52.9%, 28.2%)',
        indigoDark7: 'hsl(226, 56.0%, 34.5%)',
        indigoDark8: 'hsl(226, 58.2%, 44.1%)',
        indigoDark9: 'hsl(226, 70.0%, 55.5%)',
        indigoDark10: 'hsl(227, 75.2%, 61.6%)',
        indigoDark11: 'hsl(228, 100%, 75.9%)',
        indigoDark12: 'hsl(226, 83.0%, 96.3%)',
    },
     indigo: {
        indigo1: 'hsl(225, 60.0%, 99.4%)',
        indigo2: 'hsl(223, 100%, 98.6%)',
        indigo3: 'hsl(223, 98.4%, 97.1%)',
        indigo4: 'hsl(223, 92.9%, 95.0%)',
        indigo5: 'hsl(224, 87.1%, 92.0%)',
        indigo6: 'hsl(224, 81.9%, 87.8%)',
        indigo7: 'hsl(225, 77.4%, 82.1%)',
        indigo8: 'hsl(226, 75.4%, 74.5%)',
        indigo9: 'hsl(226, 70.0%, 55.5%)',
        indigo10: 'hsl(226, 58.6%, 51.3%)',
        indigo11: 'hsl(226, 55.0%, 45.0%)',
        indigo12: 'hsl(226, 62.0%, 17.0%)',
    },
    blue: {
        blue1: '#fbfdff',
        blue2: '#f5faff',
        blue3: '#edf6ff', 
        blue4: '#e1f0ff',
        blue5: '#cee7fe',
        blue6: '#b7d9f8',
        blue7: '#96c7f2',
        blue8: '#5eb0ef',
        blue9: '#0091ff',
        blue10: '#0081f1',
        blue11: '#006adc',
        blue12: '#00254d',
    },
    redDark: {
        red1: 'hsl(353, 23.0%, 9.8%)',
        red2: 'hsl(357, 34.4%, 12.0%)',
        red3: 'hsl(356, 43.4%, 16.4%)',
        red4: 'hsl(356, 47.6%, 19.2%)',
        red5: 'hsl(356, 51.1%, 21.9%)',
        red6: 'hsl(356, 55.2%, 25.9%)',
        red7: 'hsl(357, 60.2%, 31.8%)',
        red8: 'hsl(358, 65.0%, 40.4%)',
        red9: 'hsl(358, 75.0%, 59.0%)',
        red10: 'hsl(358, 85.3%, 64.0%)',
        red11: 'hsl(358, 100%, 69.5%)',
        red12: 'hsl(351, 89.0%, 96.0%)',
    },
    greenDark: {
        green1: 'hsl(146, 30.0%, 7.4%)',
        green2: 'hsl(155, 44.2%, 8.4%)',
        green3: 'hsl(155, 46.7%, 10.9%)',
        green4: 'hsl(154, 48.4%, 12.9%)',
        green5: 'hsl(154, 49.7%, 14.9%)',
        green6: 'hsl(154, 50.9%, 17.6%)',
        green7: 'hsl(153, 51.8%, 21.8%)',
        green8: 'hsl(151, 51.7%, 28.4%)',
        green9: 'hsl(151, 55.0%, 41.5%)',
        green10: 'hsl(151, 49.3%, 46.5%)',
        green11: 'hsl(151, 50.0%, 53.2%)',
        green12: 'hsl(137, 72.0%, 94.0%)',
    },
    amberDark: {
        amber1: 'hsl(36, 100%, 6.1%)',
        amber2: 'hsl(35, 100%, 7.6%)',
        amber3: 'hsl(32, 100%, 10.2%)',
        amber4: 'hsl(32, 100%, 12.4%)',
        amber5: 'hsl(33, 100%, 14.6%)',
        amber6: 'hsl(35, 100%, 17.1%)',
        amber7: 'hsl(35, 91.0%, 21.6%)',
        amber8: 'hsl(36, 100%, 25.5%)',
        amber9: 'hsl(39, 100%, 57.0%)',
        amber10: 'hsl(43, 100%, 64.0%)',
        amber11: 'hsl(39, 90.0%, 49.8%)',
        amber12: 'hsl(39, 97.0%, 93.2%)',
    },
};

export default colors;
