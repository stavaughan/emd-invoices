import NumberFormat from 'react-number-format';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const ViewIcon = () => (
	<FAIcon
		icon={['far', 'credit-card']}
		className="position-absolute h3"
		style={{
			top: '53%',
			right: '3%',
			transform: 'translateY(-50%)',
			color: '#cbd5e1'
		}}
	/>
);

const InlineEncryptCC = ({
	style,
	newLabel,
	onUpdateValue,
	onBlurHandler,
	className
}) => {

	return (
		<div className="position-relative">
			<NumberFormat
				className={className}
				value={newLabel.maskedStr}
				onChange={onUpdateValue}
				onBlur={onBlurHandler}
				format="#### #### #### ####"
				mask="-"
				allowEmptyFormatting={true}
				style={style}
			/>
			<ViewIcon icon={['far', 'credit-card']} />
		</div>
	)
}

export default InlineEncryptCC
