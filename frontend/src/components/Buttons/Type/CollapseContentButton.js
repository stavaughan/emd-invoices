import { Button } from '..';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const CollapseContentButton = ({
	label,
	display,
	setDisplay,
	className,
	setDisabled
}) => {

	return (
		<div {...className && { className }}>
			<Button
				className="btn-md link-hover fw-light mb-3 py-0"
				rest={{
					onClick: (e) => {
						e.preventDefault()
						setDisplay(!display)
						setDisabled(display)
					}
				}}
			>
				{label}
				<FAIcon
					icon={display ? 'angle-down' : 'angle-up'}
					className="ms-2 mt-1 fw-lighter"
				/>
			</Button>
		</div>
	)
}

export default CollapseContentButton
