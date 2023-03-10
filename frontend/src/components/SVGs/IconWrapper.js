const IconWrapper = ({ children }) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<defs>
			<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop
					offset="0%"
					style={{
						stopColor: 'var(--blue-300)',
						stopOpacity: '1'
					}}
				/>
				<stop
					offset="100%"
					style={{
						stopColor: 'var(--blue-700)',
						stopOpacity: '1'
					}}
				/>
			</linearGradient>
		</defs>
		<g
			fill="none"
			fillRule="evenodd"
		>
			{children}
		</g>
	</svg>
);

export default IconWrapper;
