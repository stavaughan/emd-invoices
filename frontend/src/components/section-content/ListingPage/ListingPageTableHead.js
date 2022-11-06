import { useCallback, useMemo } from 'react';
import { Global } from 'globals/js';
import { useAllowed } from 'hooks';
import { ListingPageLogic } from '.';
import { SiteData } from 'data';

import Classes from './ListingPageTable.module.css';

const { headColClass } = ListingPageLogic;

const ListingPageTableHead = ({ pageID, sticky }) => {

	const { allowed } = useAllowed();

	const headData = useMemo(() => {
		const pageData = SiteData.pageLayout.find(page => page._id === pageID);
		return pageData?.section?.allItems?.tableCollumns;
	}, [pageID]);

	const headClass = useCallback((width, id, idx) => {
		const displayTest = (!idx || (pageID === 'vendors' && idx === 1)) && pageID !== 'invoices';
		const display = displayTest ? ' d-none d-sm-table-cell' : '';
		return headColClass({ id, idx, width, pageID, headData, Classes }) + display;
	}, [headData, pageID])

	const label = useCallback((id) => {
		const colTitle = (id && id !== 'id') && Global.upperCaseFirst(id);
		return !allowed && id === 'action' ? '' : colTitle;
	}, [allowed])

	return (
		<tr
			className="text-dark"
			{...sticky && {
				style: {
					position: "sticky",
					top: "0"
				}
			}}
		>
			{headData.map((col, idx) => {

				const className = headClass(col?.width, col?.id, idx, headData.length - 1)

				return (
					<th
						key={col?.id || idx}
						{...className && { className: className }}
					>
						{label(col?.id)}
					</th>
				);
			})}
		</tr>
	);
};

export default ListingPageTableHead;
