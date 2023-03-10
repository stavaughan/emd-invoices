import { Link } from 'react-router-dom';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const NextPrevLink = ({ selID, onSelectID, icon, label, path }) => {

	const iconElem = <FAIcon icon={icon} className={label === 'Prev' ? "me-2" : "ms-2"} />

	return (
		<>
			<Link
				to={path + selID}
				onClick={() => onSelectID(selID)}
				className="btn btn-primary"
			>
				{label === 'Prev' && iconElem}
				{label}
				{label === 'Next' && iconElem}
			</Link>
		</>
	);
};

export default NextPrevLink;
