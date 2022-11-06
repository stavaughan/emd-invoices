import { currencyCountryCodes } from './lib';

const currencyFormatter = ({ num, region, dec }) => {

    const { inf, curID } = region;

    const numberFormat = new Intl.NumberFormat(inf, {
        style: 'currency',
        currency: curID,
        minimumFractionDigits: dec
    });

    return numberFormat.format(dec === 0 ? Math.round(num) : num);
};

const formatCurrency = ({ num, dec = 0, type }) => {

    const countryObj = currencyCountryCodes.find(cur => cur.curID === type);

    const region = {
        inf: countryObj.inf,
        curID: countryObj.curID
    };

    const formattedNumber = currencyFormatter({ num, region, dec });

    return {
        class: formattedNumber.slice(0, 1) === '-' ? 'text-danger' : '',
        value: Math.sign(num) !== -1 ? `${formattedNumber}` : `(${formattedNumber.slice(1)})`
    }
};

const amountUSD = ({num, key = 'value', dec = 0}) => {
    if(isNaN(num)) return ''
    return formatCurrency({ num, dec, type: 'USD' })[key]
};

export default amountUSD;
