module.exports = function toReadable(number) {
    let translation;
    let hundreds;
    let decim;
    let units;

    const arrNum = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'one hundred',
        '200': 'two hundred',
        '300': 'three hundred',
        '400': 'four hundred',
        '500': 'five hundred',
        '600': 'six hundred',
        '700': 'seven hundred',
        '800': 'eight hundred',
        '900': 'nine hundred',        
        '1000': 'one thousand'
    };
    if (number >= 0 && number <= 20 || number == 100 || number == 1000) {
        translation = arrNum[number];
    } else if (number > 20 && number < 100) {
        decim = Math.trunc(number / 10) * 10;
        units = number - decim;
        decim = arrNum[decim];
        units = arrNum[units];
            if (units == 'zero') {
                translation = decim;
            } else {
                translation = decim + ' ' + units;
            }

    } else if (number > 100 && number < 1000) {
        hundreds = Math.trunc(number / 100) * 100;
        decim = number - hundreds;
            if (decim < 20) {
                decim = (number - hundreds) / 10 * 10;
            } else {
                decim = Math.trunc((number - hundreds) / 10) * 10;
            }
        units = number - hundreds - decim;
        hundreds = arrNum[hundreds];
        decim = arrNum[decim];
        units = arrNum[units];
        if (decim == 'zero') {
            translation = hundreds;
        } else if (units == 'zero') {
            translation = hundreds + ' ' + decim;
        } else {
            translation = hundreds + ' ' + decim + ' ' + units;
        }

    }

    return translation;
}
