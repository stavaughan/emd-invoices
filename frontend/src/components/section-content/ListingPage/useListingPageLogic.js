import clsx from 'clsx';
import { SiteData } from 'data';
import { useCallback } from 'react';
import { Global } from 'globals/js';
import { useAllowed } from 'hooks';

import Classes from './ListingPageTable.module.css';

const useListingPageLogic = (pageID = '') => {

	const { allowed } = useAllowed();

	const addressesContact = useCallback((address, ids) => {
		const IDPhys = ids?.length ? ids[0] : '';
		const IDMail = ids?.length ? ids[1] : '';
		const physicalAddress = address?.physical
			? [{
				_id: IDPhys || 'addphys',
				type: "physical",
				address: address.physical
			}] : [];
		const mailingAddress = address?.mailing
			? [{
				_id: IDMail || 'addmail',
				type: "mailing",
				address: address.mailing
			}] : [];
		return [...physicalAddress, ...mailingAddress];
	}, []);

	const headColClass = useCallback(({
		id,
		idx,
		width,
		headData
	}) => {
		const last = headData.length - 1;
		const stylesheet = ['id', 'action'].includes(id) ? 'listing' : pageID;
		return clsx(
			width,
			pageID && pageID !== 'invoices' && Classes[`table-head-col_${stylesheet}__${id}`],
			(!idx || idx === last) && 'd-print-none'
		);
	}, [pageID]);

	const headLayoutData = useCallback(() => {
		if(!pageID) return [];
		const pageData = SiteData.pageLayouts.find(page => page._id === pageID);
		return pageData?.section?.allItems?.tableCollumns;
	}, [pageID]);

	const headClass = useCallback((width, id, idx) => {
		const headData = headLayoutData();
		const displayTest = (!idx || (pageID === 'vendors' && idx === 1)) && pageID !== 'invoices';
		const display = displayTest ? ' d-none d-sm-table-cell' : '';
		return headColClass({ id, idx, width, headData }) + display;
	}, [headColClass, headLayoutData, pageID]);

	const columnlabel = useCallback((id) => {
		const colTitle = (id && id !== 'id') && Global.upperCaseFirst(id);
		return !allowed && id === 'action' ? '' : colTitle;
	}, [allowed])

	return {
		addressesContact,
		headLayoutData,
		headColClass,
		columnlabel,
		headClass
	};
};

export default useListingPageLogic;
