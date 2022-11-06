import { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from 'contexts';
import { useSelector } from 'react-redux';
import { navLogic } from '..';

const PageSelectorDDLinks = ({ small, option }) => {

	const { setIsNavCollapsed } = useContext(DataContext);
	const { userID, access } = useSelector(state => state.auth).user;

	const pids = useMemo(() => navLogic.allowedPIDs(option.label, access), [option.label, access])

	if (!pids?.length) {
		return null
	}

	return (
		<ul
			className={`dropdown-menu dropdown-menu-end text-sm font-medium${small ? ' show' : ''}`}
			id={`${option._id}-${small ? 'sm' : 'lg'}`}
		>
			{pids.map(pid => {
				const page = navLogic.allowedPage(pid);
				return (
					<li key={page?._id}>
						<NavLink
							className="dropdown-item"
							role="button"
							onClick={() => setIsNavCollapsed(true)}
							to={`/${userID}/${page?.path}`}
						>
							{page?.label}
						</NavLink>
					</li>
				);
			})}
		</ul>
	)
};

export default PageSelectorDDLinks;
