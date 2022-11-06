import { useCallback, useMemo, useState } from 'react'
import { Global } from 'globals/js';
import { GroupSentCheckBoxes } from '.'
import { useClear } from 'hooks';

const MultiSentCheckBox = ({
	invoices,
	setSelectedIDs,
	selectedIDs,
	setRequestData,
	setEntering,
	noneLabel,
	clear
}) => {

    const [dateGroup, setDateGroup] = useState('')

    const dateGroups = useMemo(() => {
        if (!invoices?.length) {
            return []
        }
        return Global.uniqueArray(invoices.map(_ => _.date))
    }, [invoices])

    const allID = useCallback((date) => {
        return `bulk${noneLabel}all${date.replaceAll(' ', '').replace(',', '').toLowerCase()}`;
    }, [noneLabel])

    const filteredInvoices = useCallback((date) => invoices.filter(_ => _.date === date), [invoices]);

	useClear(clear, () => setDateGroup(''))

    return (
        <div className="list-group-flush p-3">
            <div className="list-group mb-2 py-2">
                {dateGroups?.length ? dateGroups.map(date => (
                    <GroupSentCheckBoxes
                        key={allID(date)}
                        itemID={allID(date)}
                        invoices={filteredInvoices(date)}
                        dateGroup={dateGroup}
                        setDateGroup={setDateGroup}
                        setRequestData={setRequestData}
                        setSelectedIDs={setSelectedIDs}
						setEntering={setEntering}
                        selectedIDs={selectedIDs}
                        date={date}
                    />
                )) : (
                    <div className="text-center mx-5 text-danger">
                        {`All invoices have been marked as ${noneLabel}...`}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiSentCheckBox;
