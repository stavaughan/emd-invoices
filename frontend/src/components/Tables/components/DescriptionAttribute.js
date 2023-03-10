import React from 'react'
import clsx from 'clsx';

const DescriptionAttribute = ({ title, value, valueClass }) => {
	return (
		<div className="d-flex align-items-center">
			<span className="fw-bolder text-dark text-xxs">
				{title}
			</span>
			<span className={clsx(
				"text-muted ms-2",
				valueClass
			)}>
				{value}
			</span>
		</div>
	)
};

export default DescriptionAttribute
