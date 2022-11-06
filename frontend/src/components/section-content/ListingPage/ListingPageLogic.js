import clsx from 'clsx';

const ListingPageLogic = {

	addressesContact(address, ids) {

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
	},

	headColClass: ({
		id,
		idx,
		width,
		pageID,
		headData,
		Classes
	}) => {

		const last = headData.length - 1;
		const stylesheet = ['id', 'action'].includes(id) ? 'listing' : pageID;

		return clsx(
			width,
			pageID !== 'invoices' && Classes[`table-head-col_${stylesheet}__${id}`],
			(!idx || idx === last) && 'd-print-none'
		);
	}
};

export default ListingPageLogic;
