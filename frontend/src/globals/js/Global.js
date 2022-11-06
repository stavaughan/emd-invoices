import { dates } from './lib';

const Global = {

	_Date: {

		// Format type === 'full': December 16, 2020
		// Format type === 'abrev': Dec 16, 2020
		formatted(date, type = 'abrev') {
			const newDate = date ? new Date(date) : new Date();
			const month = newDate.getMonth();
			const formattedMonth = dates.monthArray.find((_, i) => i === month)[type];
			const day = newDate.getDate();
			const year = newDate.getFullYear();
			return `${formattedMonth} ${day}, ${year}`;
		},

		//Format: 2021-05-14
		formattedInput(date) {
			const year = date.getFullYear();
			const monthInt = date.getMonth() + 1;
			const dayInt = date.getDate();
			const month = monthInt < 10 ? `0${monthInt}` : monthInt;
			const day = dayInt < 10 ? `0${dayInt}` : dayInt;
			return `${year}-${month}-${day}`;
		},

		dateObjectFromInput(value) {
			const [year, month, day] = value.split('-');
			return new Date(year, month - 1, day);
		},

		// convert date input value from 'yyyy-mm-dd' to date string in ms
		timeStringFromDateInput(inputValue) {
			const rdate = inputValue.split('-');
			const fdate = `${rdate[1]}/${rdate[2]}/${rdate[0]}`;
			return new Date(fdate).getTime();
		}
	},

	milliseconds: {
		minute: 60 * 1000,
		hour: 60 * 60 * 1000,
		day: 60 * 60 * 24 * 1000,
		month: 365 * 60 * 60 * 24 * 1000 / 12,
		leapYear(year) {
			return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
		},
		daysInYear(year) {
			return Global.milliseconds.leapYear(year) ? 366 : 365
		},
		month2(year) {
			return Global.milliseconds.daysInYear(year) * 60 * 60 * 24 * 1000 / 12;
		}
	},

	elapsedTimeMessage(startDate) {
		const today = new Date();
		const year = today.getFullYear();
		const diffTime = today.getTime() - startDate;
		const hours = Math.floor(diffTime / Global.milliseconds.hour);
		const days = Math.floor(diffTime / Global.milliseconds.day);
		const months = Math.floor(diffTime / Global.milliseconds.month2(year));
		switch (true) {
			case hours < 1:
				return 'less than an hour ago';
			case hours >= 1 && hours < 2:
				return '1 hour ago';
			case hours >= 2 && days < 1:
				return `${hours} hours ago`;
			case days >= 1 && days < 2:
				return `1 day ago`;
			case days >= 2 && months < 1:
				return `${days} days ago`;
			case months >= 1 && months < 2:
				return '1 month ago';
			default:
				return `${months} months ago`;
		}
	},

	uniqueArray: (array) => Array.from(new Set(array)),

	upperCaseFirst: (string) => {
		if (typeof string !== 'string') {
			return ''
		}
		return string.split(' ').map(_ => _.charAt(0).toUpperCase() + _.slice(1)).join(' ');
	},

	maskedDots(value) {
		const length = value.length;
		const dataStr = Array(length).fill('%E2%80%A2').join('');
		return decodeURI(dataStr);
	},

	maskedNumber(value, unMasked = 3) {
		if(!value) return '';
		const strValue = value.toString().trim();
		if(!strValue) return '';
		const values = strValue.split('');
		const last = values.length - 1;
		const newValue = (a, b, i) => {
			if(unMasked === "none") return a + 'x';
			const strTest = i < last - unMasked && ![' ', '-', '_'].includes(b);
			return strTest ? a + 'x' : a + b;
		};
		return values.reduce(newValue, '');
	},

	arr2Str(num, str) {
		return Array(num).fill(str).join('');
	},

	maskedCreditCard(value) {
		if(!value) return '';
		const strValue = value.toString().trim();
		if(!strValue) return '';
		const values = strValue.split('');
		const last = values.length - 1;
		const newValue = (a, b, i) => {
			const strTest = i < last - 3 && ![' ', '-', '_'].includes(b);
			return strTest ? a + 'x' : a + b;
		};
		return values.reduce(newValue, '');
	},

	maskCC(char, mask) {
		const a2s = Global.arr2Str;
		const last4 = mask ? a2s(4, char) : char
		const sp4 = a2s(4, '\u25CF');
		return a2s(3, `${sp4} `) + last4;
	},

	maskedSSN(ssn) {
		if (!ssn) return '';
		const ssnStr = ssn.toString();
		const ssnArr = ssnStr.split('');
		const last4 = ssnArr.slice(-4);
		return `XXX-XX-${last4.join('')}`;
	},

	/**
	 *
	 * @param {*} key
	 * @param {*} order ("asc", "desc")
	 */
	emdSort: {

		compareValues(key, order = 'asc') {
			return function innerSort(a, b) {
				if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
				const comparison = Global.emdSort.comparisonVal(
					Global.emdSort.keyUpperCaseIfString(a, key),
					Global.emdSort.keyUpperCaseIfString(b, key)
				);
				return order === 'desc' ? comparison * -1 : comparison;
			};
		},

		keyUpperCaseIfString(item, key) {
			return typeof item[key] === 'string' ? item[key].toUpperCase() : item[key];
		},

		comparisonVal(a, b) {
			switch (true) {
				case a > b: return 1;
				case a < b: return -1;
				default: return 0;
			}
		}
	},

	obj: (obj) => ({
		empty: (typeof obj === 'object' && obj != null && Object.keys(obj).length !== 0) ? false : true,
		notEmpty: typeof obj === 'object' && obj != null && Object.keys(obj).length !== 0
	}),

	sortData: (data, field, dir) => {
		if (!data?.length) {
			return [];
		}
		return [].concat(data).sort(Global.emdSort.compareValues(field, dir || 'asc'))
	},

	arrayCompare: {
		ordered: (a, b) => {
			if (a.length !== b.length) return false;
			return a.every((v, i) => v === b[i]);
		},
		unordered: (a, b) => {
			if (a.length !== b.length) return false;
			for (const value of new Set([...a, ...b])) {
				const lengthA = a.filter(_ => _ === value).length;
				const lengthB = b.filter(_ => _ === value).length;
				if (lengthA !== lengthB) return false;
			}
			return true;
		}
	},

	/**
	 *
	 * @param {*} phone can either be a number or string, formatted with dashes, dots or already formatted
	 * @returns `(XXX) XXX-XXXX`
	 */
	formatPhone: (phone) => {
		if (!phone) return '';
		const phoneStr = phone.toString();
		const format = (phoneStr, char) => {
			const prefix = `(${phoneStr.slice(0, 3)}) `;
			const last7 = char
				? `${phoneStr.slice(4, 7)}-${phoneStr.slice(8, 12)}`
				: `${phoneStr.slice(3, 6)}-${phoneStr.slice(6, 10)}`;
			return prefix + last7;
		};
		const charArray = phoneStr.split('');
		const alreadyFormatted = charArray[0] === '(';
		if (alreadyFormatted) return phoneStr;
		return ['.', '-'].includes(charArray[3])
			? format(phoneStr, 1)
			: format(phoneStr);
	},

	/**
	 *
	 * @param {*} ssn number or string, social security number with or without dashes
	 * @returns {string} `XXX-XX-XXXX`
	 */
	formatSSN: (ssn) => {
		if (!ssn) return '';
		const ssnStr = ssn.toString();
		return ssnStr.replace(/\D/g, '')
			.replace(/^(\d{3})/, '$1-')
			.replace(/-(\d{2})/, '-$1-')
			.replace(/(\d)-(\d{4}).*/, '$1-$2');
	},

	formatHeight: (val) => {
		const number = Number(val);
		const feet = Math.floor(number / 12);
		const inches = number - (feet * 12);
		return `${feet}' ${inches}"`;
	},
	openInNewTab: { target: "_blank", rel: "noopener noreferrer" },
	sumArrayItemValues(data, key) {
		return data.map(_ => _[key]).reduce((a, b) => a + b, 0);
	},

	daysDueMessage(dueDate) {
		const daysOverDue = (today, dueDate) => {
			const msDay = 60 * 60 * 24 * 1000;
			const days = today - dueDate;
			return Math.floor(days / msDay);
		};
		const dateNow = Date.now() - Global.userTimeZoneOffset();
		const daysDue = Math.abs(daysOverDue(dateNow, dueDate));
		const plural = daysDue !== 1 ? 's' : '';
		return {
			dateNow,
			daysDue,
			overDue: `Overdue by ${daysDue} day${plural}`,
			dueBy: `Due in ${daysDue} day${plural}`
		}
	},

	userTimeZoneOffset() {
		return new Date().getTimezoneOffset() * 60 * 1000;
	},

	// evaluates pw for at least 8 characters, at least 1 number and both lower and upper case
	passWordCheck(pw) {
		const integers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		const pwArray = pw?.split('');
		if (!pwArray?.length) {
			return false
		}
		const numbersCheck = pwArray.map(i => Number(i)).map(n => integers.includes(n)).includes(true);
		const lengthCheck = pwArray.length > 7;
		const upperCaseCheck = pwArray.map(i => !integers.includes(Number(i)) && i === i.toUpperCase()).includes(true);
		const lowerCaseCheck = pwArray.map(i => !integers.includes(Number(i)) && i === i.toLowerCase()).includes(true);
		return numbersCheck && lengthCheck && upperCaseCheck && lowerCaseCheck === true;
	},

	//urLabel: (url) => url.replace(/^(https?)(:\/\/|(%3A%2F%2F))/, '').replace('/', ''),
	urLabel: (url) => url.replace('https://', '').replace('http://', ''),

	existingFileCheck: (prev, data, key) => {
		if (!prev?.length) return data;
		const keys = data.map(_ => _[key]);
		const prevItems = prev.filter(_ => !keys.includes(_[key]));
		return [...prevItems, ...data];
	},

	blobToBase64: async (file, setState) => {
		const name = file?.name;
		const mime = file?.type;
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = async (e) => {
			const dataURL = reader.result;
			const base64 = dataURL.replace(`data:${mime};base64,`, '');
			await setState(prev => Global.existingFileCheck(prev, [{
				fileURL: base64,
				mime,
				name
			}], 'name'));
		}
	},

	nums1toN: (n) => [...Array(n)].map((_, i) => (i + 1)),

	seqNumsFromTo: (start, end) => [...Array(end)].map((_,i) => i + 1).slice(start),

	notEmpty: {
		object: (value) => value && Object.keys(value).length,
		array: (value) => value && value?.length
	},

	emptyObject: (obj) => {
		if (!obj || typeof obj !== 'object' || obj === null) return true;
		return !Object.keys(obj).length
	},

	userDevice(screenWidth) {
		const { xsmall, small, medium, large, xlarge } = screenWidth;
		switch (true) {
			case xsmall: return { width: '340', className: 'modal-sm' };
			case small: return { width: '450' };
			case medium: return { width: '550' };
			case [large, xlarge].includes(true): return { width: '740', className: 'modal-lg' };
			default: return { width: '1100', className: 'modal-xl' }
		}
	},

	sumAll: (data) => data.reduce((a, b) => a + b, 0),

	isLast: (items, idx) => (items.length - 1) === idx,

	loadTime: ({ setLoading, loader, loadFn, ms }) => {

		loader
			? setLoading(prev => ({ ...prev, [loader]: true }))
			: setLoading(true);

		setTimeout(() => {
			loader
				? setLoading(prev => ({ ...prev, [loader]: false }))
				: setLoading(false);
			loadFn()
		}, ms || 500)
	},

	deepCopy: (object) => JSON.parse(JSON.stringify(object)),

	propTotal: (data, prop, nProp) => {
		return data
			.map(_ => nProp ? _[prop][nProp] : _[prop])
			.reduce((a, b) => a + b, 0)
	},

	// will return a string of only numbers from the input parameter or empty string
	numbersCharacters: (value) => {
		if(typeof value === 'number') return value.toString();
		const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
		return value.split('').filter(_ => nums.includes(_)).join('');
	},

	// will return a number from numbers pulled out of input text string (integers only)
	numbersOnly: (value) => {
		if(typeof value === 'number') return value;
		const numValue = value.trim();
		if(!numValue) return;
		const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
		const numericalCharacters = numValue.split('').filter(_ => nums.includes(_)).join('');
		return Number(numericalCharacters)
	},

	// will return a string representing only numbers from the input parameter if all of the characters are numbers or return an empty string
	allNumberCharacters: (value) => {
		if(typeof value === 'number') return value;
		const textValue = value.trim();
		return (!isNaN(Number(textValue))) ? textValue : '';
	},

	counter: ((incr = 1, start) => {
		let count = start || 0;
		return () => count += incr;
	})(),

	itemKey: (name) => {
		return name
			.replaceAll(' ', '')
			.replaceAll('-', '')
			.replaceAll('.', '')
			.toLowerCase();
	},

	listKey: (value, start = 3, length) => {
		const str = value + '';
		const len = length || start + 6;
		return str.replace(/\s/g, '').slice(start, len).toLowerCase()
	},

	randomHex: () => Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")
};

export default Global;
