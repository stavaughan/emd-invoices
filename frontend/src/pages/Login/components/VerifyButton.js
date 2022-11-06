import { LinkHoverBtn } from 'components/Buttons'

const VerifyButton = ({ setShowMessage, navigate }) => {

	const onVerifyHandler = (e) => {
		e.preventDefault()
		if (setShowMessage) {
			setShowMessage(false)
		}
		navigate('/verify')
	}
	return (
		<div className="text-center mb-4">
			<div className="text-secondary">
				Already submitted request?
			</div>
			<LinkHoverBtn rest={{ onClick: onVerifyHandler }}>
				Verify account
			</LinkHoverBtn>
		</div>
	)
}

export default VerifyButton
