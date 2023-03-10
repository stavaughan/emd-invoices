import React from 'react'

const NamesList = ({ names }) => {

	if (names.length === 1) return <>{names[0]}</>

	return (
		<ul className="list-group bg-light">
			{names.map((name, i) => (
				<li className="list-group-item detail border-0" key={name + i}>
					{name}
				</li>
			))}
		</ul>
	)
};

export default NamesList
