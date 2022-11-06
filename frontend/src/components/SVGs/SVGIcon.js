const SVGIcon = ({
	svgClass,
	width,
	height,
	fill,
	viewBox,
	children
}) => {

	return (
		<svg
			{...svgClass && { className: svgClass }}
			width={width}
			height={height}
			viewBox={viewBox}
			{...fill && { fill }}
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			{children}
		</svg>
	)
}

export default SVGIcon
