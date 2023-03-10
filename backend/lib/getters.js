/**
 *
 * @param {(string | number)} num num with or without dashes
 * @returns {string} `XXXX`
 */
 const getLast4 = (num) => {
    const numStr = num.toString();
    return numStr.slice(numStr.length - 4, numStr.length);
};

const getters = {

    expirationDate: (days) => {
        const dateNow = new Date();
        const totalDays = dateNow.getDate() + days;
        return new Date(totalDays)
    },

    toLower: (val) => val.toLowerCase(),

    toUpper: (val) => val.toUpperCase(),

    /**
     *
     * @param {(object | string)} date  - either new Date object or time string in ms
     * @param {boolean} string          - if true date is in the format of a time string
     * @returns {string} 'MM/DD/YYYY'
     */
    formatDate_MM_DD_YYYY: (date, string) => {
        if (!date) return '';
        const fDate = string ? new Date(date) : date;
        const monthInt = fDate.getMonth() + 1;
        const month = monthInt < 10 ? `0${monthInt}` : monthInt;
        return `${month}/${fDate.getDate()}/${fDate.getFullYear()}`;
    },

    /**
     *
     * @param {(string | number)} cc - credit card number with or without dashes
     * @returns {string} `****-****-****-XXXX`
     */
    obfuscateCC: (cc) => {
        const last4 = getLast4(cc);
        return `****-****-****-${last4}`;
    },

    /**
     *
     * @param {(string | number)} ssn - social security number with or without dashes
     * @returns {string} `XXX-XX-XXXX`
     */
    formatSSN: (ssn) => {
        if (!ssn) return '';
        const ssnStr = ssn.toString();
        return ssnStr
            .replace(/\D/g, '')
            .replace(/^(\d{3})/, '$1-')
            .replace(/-(\d{2})/, '-$1-')
            .replace(/(\d)-(\d{4}).*/, '$1-$2');
    },

    /**
     *
     * @param {(string | number)} ssn - social security number with or without dashes
     * @returns {string} `XXX-XX-XXXX`
     */
    obfuscateSSN: (ssn) => {
        const last4 = getLast4(ssn);
        return `****-**-${last4}`;
    },

    /**
     *
     * @param {(string | number)} phone - formatted with dashes, dots or already formatted
     * @returns {string} `(XXX) XXX-XXXX`
     */
    formatPhone: (phone) => {

        if (!phone) return '';

        const phoneStr = phone.toString();

        // phone number formatter function
        const format = (phoneStr, char) => {

            const prefix = `(${phoneStr.slice(0, 3)}) `;

            const last7 = char
                ? `${phoneStr.slice(4, 7)}-${phoneStr.slice(8, 12)}`
                : `${phoneStr.slice(3, 6)}-${phoneStr.slice(6, 10)}`;

            return prefix + last7;
        };

        const charArray = phoneStr.split('');

        // return original param if already formatted
        const alreadyFormatted = charArray[0] === '(';
        if (alreadyFormatted) return phoneStr;

        // return newly formatted phone number
        return ['.', '-'].includes(charArray[3])
            ? format(phoneStr, 1)
            : format(phoneStr);
    },

    /**
     *
     * @param {Object} country
     * @param {string} country.lang - ISO country language code.
     * @param {string} country.curr - Country currency code.
     * @param {number} num
     * @returns {string} [result=$1,240.13]
     */
    toCurrency(country, num) {
        return new Intl.NumberFormat(country.lang, {
            style: 'currency',
            currency: country?.curr || ''
        }).format(num)
    },

    /**
     *
     * @property {string}  defaults.lang - ISO country language code.
     * @property {string}  defaults.curr - Country currency code.
     * @param {number} num
     * @returns {string} [result=$1,240.13]
     */
    toCurrency_USD(num) {
        const defaults = {
            lang: 'en-US',
            curr: 'USD'
        };
        return this.toCurrency(defaults, num)
    },

    fillStr: (str, num) => [...Array(num)].fill(str).reduce((a,b) => a + b, ''),

    getName: (str, num) => {

        const randomHex = Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");

        return str
            .replaceAll(' ', '')
            .replaceAll('-', '')
            .split('')
            .filter((_, i) => i < num)
            .reduce((a, b) => a + b, '') + '_' + randomHex;
    }
}

export default getters
