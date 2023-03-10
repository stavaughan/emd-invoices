import React from 'react';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { DropDownEllipsis } from '.'

const DropDownRowEnd = ({ menuID = '', menuItems, itemID, style }) => {

	return (
		<div className="d-flex justify-content-end pe-1">
			<div className="btn-group">
				<DropDownEllipsis menuID={menuID} style={style}>
					{menuItems?.length ? menuItems.map((item, idx) => {
						const loading = item?.loading || false;
						const handleOnClick = () => {
							itemID && item.onClickHandler(itemID);
						};
						return (
							<li
								key={item.icon + idx}
								className="text-xs dropdown-item"
								onClick={handleOnClick}
								role="button"
							>
								<FAIcon
									icon={loading ? 'circle-notch' : item.icon}
									className="me-2 text-gray-400"
									spin={loading}
								/>
								{loading ? 'please wait...' : item.label}
							</li>
						)
					}) : null}
				</DropDownEllipsis>
			</div>
		</div>
	)
}

export default DropDownRowEnd
