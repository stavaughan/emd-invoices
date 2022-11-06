const PlaceHolderThumbnail = ({ width, height, children }) => {

	const tnHeight = height || width;

	return (
		<svg
			className="bd-placeholder-img float-start"
			width={width}
			height={tnHeight}
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label={`Placeholder: ${width}x${tnHeight}`}
			preserveAspectRatio="xMidYMid slice"
			focusable="false"
		>
			<title>Placeholder</title>
			<rect width="100%" height="100%" fill="transparent"></rect>
			{children}
		</svg>
	)
}

export default PlaceHolderThumbnail
