import React from 'react'

const Svg = ({ width, height, viewBox, fill, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		width={width || "24"}
		height={height || "24"}
		viewBox={viewBox || "0 0 24 24"}
		fill={fill || "none"}
		{...props}
	>
		{props.children}
	</svg>
)

export default Svg
