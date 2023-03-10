import { useContext } from 'react';
import { controlProps } from 'globals/js';
import { DataContext, SettingsContext } from 'contexts';
import { SiteData } from 'data';
import clsx from 'clsx';

const LaunchInvoiceModal = () => {

	const { smallText } = useContext(SettingsContext).fontSize;
	const { setIsNavCollapsed } = useContext(DataContext)

    return (
        <button
            className={clsx(smallText, "ps-0 btn link-hover")}
            onClick={() => setIsNavCollapsed(true)}
            {...controlProps.modalOpen(SiteData.modalIDs.invoicePrint)}
        >
            View invoice
        </button>
    )
}

export default LaunchInvoiceModal
