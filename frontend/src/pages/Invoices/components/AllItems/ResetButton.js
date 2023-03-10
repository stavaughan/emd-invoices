import { resetInvoiceFilters } from 'features/invoices/invoiceDataSlice';
import { Button } from 'components/Buttons';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const ResetButton = ({
	initTitle,
	setFilter,
	setTableTitle,
	setCancelFilter,
	setActiveID,
	isXSmall
}) => {

    const dispatch = useDispatch();

    const onClickReset = () => {
		setTableTitle(initTitle)
		setFilter(false)
		setCancelFilter(true)
		setActiveID('')
		if(resetInvoiceFilters) {
			dispatch(resetInvoiceFilters())
		}
    };

    return (
        <Button
            className="btn-sm text-danger"
            rest={{ onClick: onClickReset }}
        >
            <FAIcon
				icon="times"
				{...!isXSmall && { className: "me-2" }}
			/>
            {!isXSmall && 'Clear'}
        </Button>
    );
};

export default ResetButton;
