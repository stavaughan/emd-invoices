import { EmailInput, LoginButton } from '.';
import { Row, Col } from 'components/HTML';

const ForgotPasswordSection = ({ setFetchReady, dispatchEmail, emailIsValid, formIsValid }) => {

    const onSubmit = (e) => {
        e.preventDefault()
        setFetchReady(true);
    }

    return (
        <form onSubmit={onSubmit}>
            <EmailInput
                dispatchEmail={dispatchEmail}
                emailIsValid={emailIsValid}
                label="(account user name)"
            />
            <Row>
                <Col cols="12">
                    <LoginButton
                        btnID="passwordResetBtn"
                        className="btn-primary me-md-2 mt-3"
                        disabled={!formIsValid}
                        label={<span className="h4">Submit</span>}
                    />
                </Col>
            </Row>
        </form>
    )
}

export default ForgotPasswordSection
