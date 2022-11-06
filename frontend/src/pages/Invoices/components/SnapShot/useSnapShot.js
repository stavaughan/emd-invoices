import { useCallback } from 'react';
import { amountUSD } from "globals/js";

const useSnapShot = () => {

	const currentYear = useCallback(() => new Date().getFullYear(), []);

    const lastYear = useCallback(() => new Date().getFullYear() - 1, []);

    const lastYearRange = useCallback(() =>{
        return {
            start: new Date(`01/01/${lastYear()}`).getTime(),
            end: new Date(`12/31/${lastYear()}`).getTime()
        }
    }, [lastYear]);

    const sent = useCallback((inv) => new Date(inv.dateSent), []);
    const created = useCallback((inv) => new Date(inv.dateCreated), []);

    const currentYearSent = useCallback((invs) => {
        if(!invs?.length) return [];
        return invs.filter(inv => sent(inv).getFullYear() === currentYear());
    }, [currentYear, sent]);

    const currentYearCreated = useCallback((invs) => {
        if(!invs?.length) return [];
        return invs.filter(inv => created(inv).getFullYear() === currentYear());
    }, [currentYear, created]);

    const currentYearNotSent = useCallback((invs) => {
        if(!currentYearCreated(invs).length) return [];
        return currentYearCreated(invs).filter(inv => inv.sentStatus === 'noSent');
    }, [currentYearCreated]);

    const LastYearInvoices = useCallback((invs) => {
        if(!invs?.length) return [];
        return invs.filter(inv => sent(inv) >= lastYearRange().start && sent(inv) <= lastYearRange().end);
    }, [lastYearRange, sent]);

    const totalAmountObj = useCallback((data) => {
		const sumAll = (amounts) => amounts.reduce((a, b) => a + b, 0);
        if(!data?.length) return 0;
        const totalAmountsInvoiced = data.map(_ => _.invoicePrice);
        const Invoicespayments = data.filter(_ => _.payments?.length).map(_ => _.payments);
        const amountsPaid = Invoicespayments.map(payments => sumAll(payments.map(_ => _.amount_paid)));
        return {
            invoiced: sumAll(totalAmountsInvoiced),
            paid: sumAll(amountsPaid),
            due: sumAll(totalAmountsInvoiced),
            notSent: sumAll(totalAmountsInvoiced),
        };
    }, []);

    const CurrentYearPaid = useCallback((invs) => {
		if(!currentYearSent(invs).length) return [];
        return currentYearSent(invs).filter(inv => inv.paidStatus === 'Paid');
    }, [currentYearSent]);

    const CurrentYearSent = useCallback((invs) => {
        if(!currentYearSent(invs).length) return [];
        return currentYearSent(invs).filter(inv => inv.sentStatus === 'sent');
    }, [currentYearSent]);

    const LastYearPaid = useCallback((invs) => {
        if(!LastYearInvoices(invs).length) return [];
        return LastYearInvoices(invs).filter(inv => inv.paidStatus === 'Paid');
    }, [LastYearInvoices]);

    const CurrentYearNotPaid = useCallback((invs) => {
        if(!CurrentYearSent(invs).length) return [];
        return CurrentYearSent(invs).filter(inv => inv.paidStatus !== 'Paid');
    }, [CurrentYearSent]);

    const paidYTDvsLastYear = useCallback((invs) => {
        const currYearPaidAmount = totalAmountObj(CurrentYearPaid(invs))?.paid;
        const lastYearPaidAmount = totalAmountObj(LastYearInvoices(invs))?.paid;
        return currYearPaidAmount && lastYearPaidAmount ? currYearPaidAmount - lastYearPaidAmount : 0;
    }, [CurrentYearPaid, LastYearInvoices, totalAmountObj]);

	const amounts = useCallback((invoices) => ({
		paidlastyear: totalAmountObj(LastYearInvoices(invoices).paid),
		invoicedytd: totalAmountObj(currentYearSent(invoices).invoiced),
		outstandingytd: totalAmountObj(CurrentYearNotPaid(invoices).due),
		notSentYTD: totalAmountObj(currentYearNotSent(invoices).notSent),
		paidytd: totalAmountObj(CurrentYearPaid(invoices).paid)
	}), [
		LastYearInvoices,
		currentYearSent,
		CurrentYearNotPaid,
		currentYearNotSent,
		CurrentYearPaid,
		totalAmountObj
	]);

    const currentYearData =  useCallback(({setData, setTitle, invoices, selFn}) => {
		const amount = amounts(invoices);
        return [
            {
                _id: "paidlastyear",
                year: lastYear(),
                title: "Paid Last Year",
                btnLabel: `Paid ${lastYear()}`,
                amount: amount.paidlastyear,
                btnClick: () => {
                    const invs = LastYearPaid(invoices);
                    setData(invs);
                    setTitle(`Invoices Paid ${lastYear()} - ${amountUSD({ num: amount.paidlastyear, dec: 0 })}`)
                    if(invs?.length) {
                        selFn(invs[0]._id)
                    }
                },
                quantity: LastYearPaid(invoices).length || ''
            },
            {
                _id: "invoicedytd",
                year: currentYear(),
                title: "Invoices YTD",
                btnLabel: "Invoices YTD",
                amount: amount.invoicedytd,
                btnClick: () => {
                    const invs = currentYearSent(invoices);
                    setData(invs);
                    setTitle(`Invoices Invoiced YTD - ${amountUSD({ num: amount.invoicedytd, dec: 0 })}`)
                    if(invs?.length) {
                        selFn(invs[0]._id)
                    }
                },
                quantity: currentYearSent(invoices).length || ''
            },
            {
                _id: "outstandingytd",
                year: currentYear(),
                title: "Outstanding YTD",
                btnLabel: "Unpaid YTD",
                amount: amount.outstandingytd,
                btnClick: () => {
                    const invs = CurrentYearNotPaid(invoices);
                    setData(invs);
                    setTitle(`Invoices Outstanding - ${amountUSD({ num: amount.outstandingytd, dec: 0 })}`)
                    if(invs?.length) {
                        selFn(invs[0]._id)
                    }
                },
                quantity: CurrentYearNotPaid(invoices).length || ''
            },
            {
                _id: "notSentYTD",
                year: currentYear(),
                title: "Not Sent YTD",
                btnLabel: "Pending YTD",
                amount: amount.notSentYTD,
                btnClick: () => {
                    const invs = currentYearNotSent(invoices);
                    setData(invs);
                    setTitle(`Invoices Not Sent YTD - ${amountUSD({ num: amount.notSentYTD, dec: 0 })}`)
                    if(invs?.length) {
                        selFn(invs[0]._id)
                    }
                },
                quantity: currentYearNotSent(invoices).length || ''
            },
            {
                _id: "paidytd",
                year: currentYear(),
                title: "Paid YTD",
                btnLabel: "Paid YTD",
                amount: amount.paidytd,
                btnClick: () => {
                    const invs = CurrentYearPaid(invoices);
                    setData(invs);
                    setTitle(`Invoices Paid YTD - ${amountUSD({ num: amount.paidytd, dec: 0 })}`)
                    if(invs?.length) {
                        selFn(invs[0]._id)
                    }
                },
                quantity: CurrentYearPaid(invoices).length || '',
                change: paidYTDvsLastYear(invoices),
                changeLabel: `- vs ${lastYear()}`
            }
        ];
    }, [
		currentYear,
		lastYear,
		paidYTDvsLastYear,
		LastYearPaid,
		currentYearSent,
		CurrentYearPaid,
		CurrentYearNotPaid,
		amounts,
		currentYearNotSent
	]);

	return { currentYearData };
}

export default useSnapShot
