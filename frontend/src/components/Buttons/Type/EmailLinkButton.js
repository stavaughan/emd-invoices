import { EmailLink } from 'components/links';

const EmailLinkButton = ({ email, className }) => {

    return (
        <span className={className || ''}>
            <EmailLink email={email} />
        </span>
    )
}

export default EmailLinkButton
