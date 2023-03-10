const creatableStyles = {
	control: (provided) => ({
		...provided,
		borderColor: 'var(--gray-300)',
		borderRadius: '0.375rem',
		'&:hover': {
			borderColor: 'var(--blue-600)'
		},
	}),
	input: (provided) => ({
		...provided,
		fontSize: '0.875rem',
		color: 'var(--gray-700)'
	}),
	menuList: (provided) => ({
		...provided,
		fontSize: '0.875rem',
		color: 'var(--gray-500)',
		lineHeight: '1rem'
	}),
	placeholder: (provided) => ({
		...provided,
		fontSize: '0.875rem',
		color: 'var(--gray-300)'
	}),
};

export default creatableStyles;
