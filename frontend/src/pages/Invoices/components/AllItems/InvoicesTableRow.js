import { useContext, useMemo } from 'react'
import { DataCell } from 'components/Tables/components';
import { amountUSD } from 'globals/js';
import { SentStatusIcons } from '.';
import { DatesContext, InvoicesContext } from 'contexts';

const InvoicesTableRow = ({ item, rowSelectFN, onReverseSent }) => {

	const { formats } = useContext(DatesContext);
	const {
		customerName,
		getNetTotal,
		getAmountDue,
		dueDateString,
		totalPayments
	} = useContext(InvoicesContext);

    const payments = useMemo(() =>
		totalPayments(item?.payments), [item?.payments, totalPayments]);

    const customer = useMemo(() =>
		customerName(item.clientID), [item.clientID, customerName]);

    const netTotal = useMemo(() =>
		amountUSD({ num: getNetTotal(item), dec: 2 }), [item, getNetTotal]);

    const amountDue = useMemo(() =>
		amountUSD({ num: getAmountDue(item), dec: 2 }), [item, getAmountDue]);

    const dateCreated = useMemo(() => {
		const date = new Date(item.dateCreated);
        return formats(date).numericLong
    }, [item, formats]);

    const dueDate = useMemo(() => {
        const dateSent = item?.dateSent || '';
        if(!dateSent) {
            return <span className="text-muted ps-3">not sent</span>
        }
		const date = new Date(dueDateString(item));
        return formats(date).numericLong;
    }, [item, formats, dueDateString]);

    return (
        <>
            <DataCell className="ps-3 d-print-none">
                <SentStatusIcons
                    itemID={item._id}
                    sentStatus={item.sentStatus}
                    rowSelectFN={rowSelectFN}
                    totalPayments={payments}
					onReverseSent={onReverseSent}
                />
            </DataCell>
            <DataCell className="ps-3">
                {item.number || ''}
            </DataCell>
            <DataCell className="d-none d-sm-table-cell">
                {customer}
            </DataCell>
            <DataCell className="text-end pe-3">
                {netTotal}
            </DataCell>
            <DataCell className="d-none d-md-table-cell text-end pe-3">
                {amountDue}
            </DataCell>
            <DataCell className="d-none d-xxl-table-cell">
                {item.paidStatus}
            </DataCell>
            <DataCell className="d-none d-xxl-table-cell">
                {dateCreated}
            </DataCell>
            <DataCell>
                {dueDate}
            </DataCell>
        </>
    )
}

export default InvoicesTableRow
