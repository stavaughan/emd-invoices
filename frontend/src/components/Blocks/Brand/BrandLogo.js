import React from 'react'

const KnockoutLogo = ({ width }) => (
	<svg
		viewBox="0 0 512 512"
		aria-hidden="true"
		width={width}
		height="100%"
	>
		<path
			d="M 246.424 362.154 L 347.06 290.928 L 246.424 219.703 L 246.424 151.107 L 443.981 290.928 L 246.424 430.75 Z"
			fill="#c3c3c3"
		/>
		<path
			d="M 246.424 273.503 L 347.06 202.278 L 246.424 131.052 L 246.424 62.456 L 443.981 202.278 L 246.424 342.099 Z"
			fill="#e2e2e2"
		/>
		<path
			d="M 48.632 219.615 L 141.677 291.072 L 48.632 362.528 L 48.632 431.346 L 231.287 291.072 L 48.632 150.797 Z"
			fill="#e2e2e2"
			transform="matrix(-1, 0, 0, -1, 279.918999, 582.143005)"
		/>
		<path
			d="M 48.632 130.678 L 141.677 202.134 L 48.632 273.591 L 48.632 342.409 L 231.287 202.134 L 48.632 61.86 Z"
			fill="#fff"
			transform="matrix(-1, 0, 0, -1, 279.918999, 404.269012)"
		/>
	</svg>
)

const ColorLogo = ({ width }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		aria-hidden="true"
		width={width}
		height="100%"
	>
		<path
			d="M 246.424 362.154 L 347.06 290.928 L 246.424 219.703 L 246.424 151.107 L 443.981 290.928 L 246.424 430.75 Z"
			fill="#710000c4"
		/>
		<path
			d="M 246.424 273.503 L 347.06 202.278 L 246.424 131.052 L 246.424 62.456 L 443.981 202.278 L 246.424 342.099 Z"
			fill="#720000"
		/>
		<path
			d="M 48.632 219.615 L 141.677 291.072 L 48.632 362.528 L 48.632 431.346 L 231.287 291.072 L 48.632 150.797 Z"
			fill="#a6a6a691"
			transform="matrix(-1, 0, 0, -1, 279.918999, 582.143005)"
		/>
		<path
			d="M 48.632 130.678 L 141.677 202.134 L 48.632 273.591 L 48.632 342.409 L 231.287 202.134 L 48.632 61.86 Z"
			fill="#a6a6a6"
			transform="matrix(-1, 0, 0, -1, 279.918999, 404.269012)"
		/>
	</svg>
)

const BrandLogo = ({ color, width }) => {

	return (
		<div>
			{color ? (
				<ColorLogo width={width} />
			) : (
				<KnockoutLogo width={width} />
			)}
		</div>
	)
}

export default BrandLogo