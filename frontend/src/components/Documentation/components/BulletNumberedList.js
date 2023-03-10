import React from 'react'
import clsx from "clsx";

const BulletNumberedList = ({ isXSmall, text }) => {
	return (
		<ul className={clsx(
			isXSmall ? "text-xs" : "text-sm",
			'fst-italic text-dark list-group'
		)}>
			{text.map((item, idx) => (
				<li
					key={item?.id || idx + 1}
					className="list-group-item d-flex justify-content-start align-items-center gap-3 border-0"
				>
					<span className="badge bg-info rounded-pill">{idx + 1}</span>
					{item?.id ? (
						<div>
							<span
								className="fw-bold"
							>
								{item.id}
							</span> - {item?.text}
						</div>
					) : item}
				</li>
			))}
		</ul>
	)
}

export default BulletNumberedList
