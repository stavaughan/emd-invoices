import { useCallback } from 'react';
import { DateSelectOrCurrent } from 'components/Forms/Groups';

const BulkDateSelect = ({
	selectedIDs,
	setRequestData,
	setEntering,
	clear
}) => {

	const newData = useCallback((date) => {
		return [...selectedIDs.map(id => ({
			id,
			reqBody: {
				sentStatus: 'sent',
				dateSent: date.getTime()
			}
		}))];
	}, [selectedIDs]);

	const onSelectDate = (value) => {
		setRequestData(newData(value));
		setEntering(true);
	};

	return (
		<DateSelectOrCurrent
			idCurrent="bulksentStatusDate"
			idNew="bulkinvoicesent"
			label="Date Invoice Sent"
			setDate={onSelectDate}
			clear={clear}
		/>
	)
}

export default BulkDateSelect
