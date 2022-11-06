import { useCallback, useMemo } from 'react';
import { controlProps } from 'globals/js';
import { SiteData } from 'data';

import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

const SentStatusIcons = ({
	itemID,
	rowSelectFN,
	sentStatus,
	totalPayments,
	onReverseSent
}) => {

	const onClickHandler = useCallback(() => rowSelectFN(itemID), [itemID, rowSelectFN]);

	const buttonProps = useMemo(() => ({
		...controlProps.modalOpen(SiteData.modalIDs.invoiceSentStat),
		onClick: onClickHandler
	}), [onClickHandler]);

	const reverseProps = useMemo(() => {
		return !totalPayments && {
			onClick: () => onReverseSent(itemID)
		};
	}, [itemID, totalPayments, onReverseSent]);

	return (
		<button
			className="btn p-0"
			{...sentStatus !== 'sent' ? buttonProps : reverseProps}
		>
			<FaIcon
				icon={sentStatus === 'sent' ? ['fas', 'check-circle'] : ['far', 'circle']}
				className="text-success"
			/>
		</button>
	);
};

export default SentStatusIcons
