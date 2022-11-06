import { AlertCard } from 'components/Alerts';
import { Button } from 'components/Buttons';
import clsx from 'clsx';
import { useMobile } from 'hooks';

const EmailSentNotice = ({ setFetchReady, successMessage }) => {

	const { isXSmall } = useMobile();

	const onResendEmail = (e) => {
		e.preventDefault()
		setFetchReady(true);
	}

	return (
		<section>
			<div className="py-2">
				<AlertCard message={successMessage} type="success" />
			</div>
			<div className={clsx(
				isXSmall && 'text-sm',
				'd-flex flex-column',
				"py-3 px-3"
			)}>
				<div className="leading-10">Didn't get the email?</div>
				<div className="leading-5 mt-2">Make sure you entered the correct email address, and check your spam or junk folder.</div>
				<div className="leading-10 mt-2">
					Still can't find it?
					<Button
						className="btn-link ms-2 p-0"
						rest={{ onClick: onResendEmail }}
					>
						Re-send request
					</Button>
				</div>
			</div>
		</section>
	)
}

export default EmailSentNotice
