import clsx from 'clsx';
import { HoverActionBtn } from 'components/Buttons/Type';
import { controlProps, Global } from 'globals/js';
import { useCallback, useContext, useMemo } from 'react';
import { SettingsContext } from 'contexts';
import { useFilterInvoices, DropdownItem } from '.';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const FilterDropDown = ({
	label,
	filterID,
	setTableTitle,
	setActiveID,
	activeID,
	filterData,
	setFilter,
	margin
}) => {

	const { fontSize, screen } = useContext(SettingsContext);
	const { smallText } = fontSize;
	const { isXSmall } = screen;

	const { onFilterByYear, onFilterInvoices } = useFilterInvoices(
		setFilter,
		setTableTitle
	);

	const buttonLabel = useMemo(() => isXSmall
		? Global.upperCaseFirst(label)
		: label, [label, isXSmall]);

	const onSelectFilterItem = useCallback((item) => {
		setActiveID(item.id);
		label === 'year'
			? onFilterByYear(item.id)
			: onFilterInvoices(item, filterID, label);
	}, [filterID, label, onFilterByYear, onFilterInvoices, setActiveID]);

	return (
		<>
			{filterData?.length ? (
				<div {...margin && { className: margin }}>
					<HoverActionBtn rest={controlProps.dropdown()}>
						<span className={isXSmall ? 'text-xxs' : 'text-xs'}>
							{isXSmall && <FAIcon icon="filter" className="me-1 text-blue-200" />}
							{buttonLabel}
						</span>
					</HoverActionBtn>
					<ul className={clsx(
						smallText,
						"dropdown-menu",
						isXSmall ? 'dropdown-menu-start' : 'dropdown-menu-end'
					)}>
						{filterData.map(item => (
							<DropdownItem
								key={filterID + item.id}
								isXSmall={isXSmall}
								item={item}
								activeID={activeID}
								onSelectFilterItem={onSelectFilterItem}
							/>
						))}
					</ul>
				</div>
			) : null}
		</>
	)
};

export default FilterDropDown;
