import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const SideBarListItem = (props) => {

	const {
		active,
		itemIcon,
		itemID,
		setSection,
		setSideNavCollapsed,
		itemLabel
	} = props;

	const { prefix, icon } = itemIcon;

	const onClickHandler = () => {
		setSection(itemID)
		setSideNavCollapsed(true)
	};

	const IconElem = () => (
		<FAIcon
			icon={prefix === 'far' ? [prefix, icon] : icon}
			className="nav-icon"
			style={{ lineHeight: '1', width: '1.2rem' }}
		/>
	);

	return (
		<li className={`nav-item${active ? ' active' : ''}`}>
			<div className="nav-link" onClick={onClickHandler}>
				<div className="align-items-center">
					<IconElem />
					{itemLabel}
				</div>
			</div>
		</li>
	)
}

export default SideBarListItem
