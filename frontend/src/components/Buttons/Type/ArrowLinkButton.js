import { NavLink } from 'react-router-dom';
import { useMobile } from 'hooks';
import { ModalButton } from '..';
import clsx from 'clsx';

const ArrowLinkButton = ({ label, modalID, link, onClick, className }) => {

	const { isXSmall } = useMobile();

	const labelArrow = (
		<>
			<span className="me-2">{label}</span>
			<span className="text-lg" aria-hidden="true">&rarr;</span>
		</>
	);

	const btnClass = clsx(
		"link-blue-600 d-flex align-items-center",
		isXSmall ? "text-xs" : "text-sm",
		className
	);

	return (
		<div className="ps-0 d-print-none">
			{modalID && <ModalButton className={btnClass} modalID={modalID}>{labelArrow}</ModalButton>}
			{link && <NavLink to={link} className={btnClass}>{labelArrow}</NavLink>}
			{onClick && <button className={`btn ${btnClass}`} onClick={onClick}>{labelArrow}</button>}
		</div>
	)
}

export default ArrowLinkButton
