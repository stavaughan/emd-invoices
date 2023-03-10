import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

const MenuExpandButton = ({
	className,
	navID,
	sideNavCollapsed,
	setSideNavCollapsed
}) => {

    return (
        <button
            className={clsx(
				'navbar-toggler sidenav-toggler d-md-none rounded',
				className
			)}
            type="button"
			data-bs-toggle="collapse"
			data-bs-target={`#${navID}`}
			aria-expanded={!sideNavCollapsed ? true : false}
			aria-controls={navID}
            aria-label="Toggle navigation"
			onClick={() => setSideNavCollapsed(!sideNavCollapsed)}
        >
            <FAIcon
				icon={sideNavCollapsed ? "minus" : "plus"}
				className="text-sm"
			/>
        </button>
    )
}

export default MenuExpandButton
