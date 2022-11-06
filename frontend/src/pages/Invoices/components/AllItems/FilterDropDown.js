import clsx from 'clsx';
import { Button } from 'components/Buttons';
import { HoverActionBtn } from 'components/Buttons/Type';
import { controlProps, Global } from 'globals/js';
import { useMemo } from 'react';
import { useFontSize, useMobile } from 'hooks';

const FilterDropDown = ({
	label,
	filterID,
	onClickHandler,
	filterData,
	margin
}) => {

	const { isXSmall } = useMobile();
	const { smallText } = useFontSize({ isXSmall });

	const buttonLabel = useMemo(() => isXSmall
		? Global.upperCaseFirst(label)
		: `Filter by ${label}`.toLowerCase(), [label, isXSmall]);

	return (
		<>
			{filterData?.length ? (
				<div {...margin && { className: margin }}>
					<HoverActionBtn
						rest={controlProps.dropdown()}
						isXSmall={isXSmall}
					>
						{buttonLabel}
					</HoverActionBtn>
					<ul className={clsx(smallText, "dropdown-menu")}>
						{filterData.map(item => (
							<li key={filterID + item.id}>
								<Button
									className={clsx(smallText, "dropdown-item")}
									rest={{ onClick: () => onClickHandler(item) }}
								>
									{item.label}
								</Button>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</>
	)
};

export default FilterDropDown;
