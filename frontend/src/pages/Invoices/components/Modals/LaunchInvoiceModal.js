import { useContext } from 'react';
import { controlProps } from 'globals/js';
import { DataContext, SettingsContext } from 'contexts';
import clsx from 'clsx';

const LaunchInvoiceModal = ({ printModalID }) => {

	const { smallText } = useContext(SettingsContext).fontSize;
	const { setIsNavCollapsed } = useContext(DataContext)

    return (
        <button
            className={clsx(smallText, "ps-0 btn link-hover")}
            onClick={() => setIsNavCollapsed(true)}
            {...printModalID ? controlProps.modalOpen(printModalID) : {}}
        >
            View invoice
        </button>
    )
}

export default LaunchInvoiceModal
