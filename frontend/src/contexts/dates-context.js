import { createContext, useMemo, useCallback } from 'react';
import { Global } from 'globals/js';

const DatesContext = createContext({
	formattedBSDates: {},
	formattedCFDates: {},
	formats: {}
});

export const DatesProvider = (props) => {

	const today = useMemo(() => new Date(), []);

	const dateObj = useCallback((date) => {
		return typeof date === 'string' ? new Date(`${date}T00:00`) : date;
	}, []);

	const dateFn = useCallback((date, format = {}, cc = 'en-US') => {
		return new Intl.DateTimeFormat(cc, format).format(dateObj(date))
	}, [dateObj])

	const formats = useCallback((date) => {
		const monthShort = dateFn(date, { month: 'short' });
		const year = dateFn(date, { year: 'numeric' });
		const year2dig = dateFn(date, { year: '2-digit' });
		return {
			// 1661020263924
			dateString: dateObj(date).getTime(),
			// '08/20/2022'
			numericLong: dateFn(date, {
				month: '2-digit',
				day: '2-digit',
				year: 'numeric'
			}),
			// '08/20/22'
			numericShort: dateFn(date, {
				month: '2-digit',
				day: '2-digit',
				year: '2-digit'
			}),
			// 'August 20, 2022'
			dateFull: dateFn(date, { dateStyle: 'long' }),
			// 'August'
			monthFull: dateFn(date, { month: 'long' }),
			// 'Aug'
			monthShort,
			// '8'
			monthNumeric: dateFn(date, { month: 'numeric' }),
			// 7
			monthIdx: dateObj(date).getMonth(),
			// '2022'
			year,
			// '22'
			year2dig,
			// 2020
			numericalYear: dateObj(date).getFullYear(),
			// '1:37:15 PM CDT'
			localTime: dateFn(date, { timeStyle: 'long' }),
			// 'Aug 2022' For cash flow next prev labels
			dateLabel: `${monthShort} ${year}`,
			// 'Aug 22' For cash flow next prev labels - mobile screen
			dateLabelShort: `${monthShort} ${year2dig}`
		}
	}, [dateFn, dateObj]);

	// returns array of month starting dates for year
	const startOfMonthsForYear = useCallback((year, month) => {
		const dates = [];
		let i = 0;
		while (i <= month) {
			const nextDate = new Date(year, i, 1)
			dates.push(nextDate);
			i++;
		}
		return dates;
	}, []);

	// Return date object
	const dateMethods = useCallback((date) => {
		const year = formats(date).year;
		const month = formats(date).monthNumeric;
		return {
			startCurrentYear: new Date(year, 0, 1),
			startLastYear: new Date(year - 1, 0, 1),
			startB4LastYear: new Date(year - 2, 0, 1),
			startOfMonths: {
				currentYear: startOfMonthsForYear(year, month - 1),
				lastYear: startOfMonthsForYear(year - 1, 11),
				b4LastYear: startOfMonthsForYear(year - 2, 11),
			}
		}
	}, [formats, startOfMonthsForYear]);

	// Balance Sheet formatted dates
	const balSheetFormat = useCallback((date) => {
		const dateString = formats(date).dateString;
		return {
			_id: dateString.toString(),
			dateString,
			numericShort: formats(date).numericShort,
			numericLong: formats(date).numericLong,
			year: formats(date).year
		}
	}, [formats]);

	const formattedBSDates = useMemo(() => {
		const months = (dates) => dates.map((date) => balSheetFormat(date))
		const dates = dateMethods(today);
		return {
			startOfYear: {
				current: balSheetFormat(dates.startCurrentYear),
				last: balSheetFormat(dates.startLastYear),
				b4Last: balSheetFormat(dates.startB4LastYear)
			},
			startOfMonths: {
				current: months(dates.startOfMonths.currentYear),
				last: months(dates.startOfMonths.lastYear),
				b4Last: months(dates.startOfMonths.b4LastYear)
			},
			now: balSheetFormat(today)
		}
	}, [today, balSheetFormat, dateMethods]);


	// Cash Flow formatted dates
	const cashFlowFormat = useCallback((date, now) => {
		const dateString = formats(date).dateString;
		return {
			_id: dateString.toString(),
			dateString,
			monthIdx: formats(date).monthIdx,
			numericalYear: formats(date).numericalYear,
			dateLabel: formats(date).dateLabel,
			...now ? { nowLabel: formats(date).numericShort } : {},
			year: formats(date).year
		}
	}, [formats]);

	const monthsCF = useCallback((dates) => {
		return dates.map((date) => cashFlowFormat(date))
	}, [cashFlowFormat]);



	const formattedCFDates = useMemo(() => {
		const dates = dateMethods(today);
		const currentYear = cashFlowFormat(dates.startCurrentYear);
		const lastYear = cashFlowFormat(dates.startLastYear);
		const b4LastYear = cashFlowFormat(dates.startB4LastYear);
		const currentYearMonths = monthsCF(dates.startOfMonths.currentYear);
		const lastYearMonths = monthsCF(dates.startOfMonths.lastYear);
		const b4LastYearMonths = monthsCF(dates.startOfMonths.b4LastYear);
		const now = cashFlowFormat(today, true);
		const allYears = [b4LastYear, lastYear, currentYear, now];
		const allMonths = [...b4LastYearMonths, ...lastYearMonths, ...currentYearMonths, now];
		return {
			startOfYear: {
				current: currentYear,
				last: lastYear,
				b4Last: b4LastYear,
				all: Global.sortData(allYears, 'dateString')
			},
			startOfMonths: {
				current: currentYearMonths,
				last: lastYearMonths,
				b4Last: b4LastYearMonths,
				all: Global.sortData(allMonths, 'dateString')
			}
		}
	}, [today, cashFlowFormat, dateMethods, monthsCF]);

	return (
		<DatesContext.Provider value={{
			formattedBSDates,
			formattedCFDates,
			formats,
			dateFn
		}}>
			{props.children}
		</DatesContext.Provider>
	);
};

export default DatesContext;
