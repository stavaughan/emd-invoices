import { SideBarListItem } from '.';

const SideBarList = (props) => {

    const {
        title,
        margin,
        listData,
        section,
        setSection,
		setSideNavCollapsed
    } = props;

    return (
        <>
            <span className="navbar-header">{title}</span>
            <ul className={`list-unstyled ms-n2 ${margin}`}>
                {listData?.length ? listData.map(item => (
                    <SideBarListItem
                        key={item.id}
                        active={section === item.id}
						setSideNavCollapsed={setSideNavCollapsed}
                        itemIcon={item.icon}
                        itemID={item.id}
                        setSection={setSection}
                        section={section}
                        itemLabel={item.label}
                    />
                )) : null}
            </ul>
        </>
    )
}

export default SideBarList
