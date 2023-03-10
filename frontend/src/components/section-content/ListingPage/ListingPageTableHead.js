import { useListingPageLogic } from '.';

const ListingPageTableHead = ({ pageID, sticky }) => {

	const {
		headLayoutData,
		columnlabel,
		headClass
	} = useListingPageLogic(pageID);

	return (
		<tr
			className="text-dark"
			{...sticky && { style: { position: "sticky", top: "0" } }}
		>
			{headLayoutData().map((col, idx) => {
				const className = headClass(col?.width, col?.id, idx, headLayoutData().length - 1)
				return (
					<th
						key={col?.id || idx}
						{...className && { className: className }}
					>
						{columnlabel(col?.id)}
					</th>
				);
			})}
		</tr>
	);
};

export default ListingPageTableHead;
