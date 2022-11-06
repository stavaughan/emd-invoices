import { useState } from 'react'
import { Chevron } from 'components/SVGs';
import clsx from 'clsx';

const AccordianWrapper = ({
	id,
	heading,
	className,
	chevron,
	open,
	children
}) => {

	const [collapse, setCollapse] = useState(true);

	const toggleCollapse = (e) => {
		e.stopPropagation();
		setCollapse(!collapse);
	};

	return (
		<div id={`accordion${id}`}>
			<div className={clsx(
				'd-flex justify-content-between align-items-center',
				'p-3 m-n2 rounded-3 bg-slate-100 position-relative'
			)}>
				<div
					id={`heading${id}`}
					className="stretched-link"
					{...!open && {
						'data-bs-toggle': "collapse",
						'data-bs-target': `#${id}`,
						'aria-expanded': true,
						'aria-controls': id,
						'role': "button",
						onClick: toggleCollapse
					}}
				>
					{heading}
				</div>
				{chevron && (
					<Chevron
						dir={collapse ? 'down' : 'up'}
						className="w-5 h-5 text-slate-300"
					/>
				)}
			</div>
			<div
				id={id}
				className={clsx(
					className,
					!open && "collapse"
				)}
				aria-labelledby={`heading${id}`}
				data-bs-parent={`#accordion${id}`}
			>
				{children}
			</div>
		</div>
	)
}

export default AccordianWrapper
