import { EmailInput, LoginButton } from '.';
import { Row, Col } from 'components/HTML';

const VerifyAccountSection = ({ setFetchReady, dispatchEmail, emailIsValid, formIsValid }) => {

    const onSubmit = (e) => {
        e.preventDefault()
        setFetchReady(true);
    }

    return (
        <form onSubmit={onSubmit}>
            <EmailInput
                dispatchEmail={dispatchEmail}
                emailIsValid={emailIsValid}
                label="(email used to request access)"
            />
            <Row>
                <Col cols="12">
                    <LoginButton
                        btnID="verifySubmitBtn"
                        className="btn-primary me-md-2 mt-3"
                        disabled={!formIsValid}
                        label={<span className="h4">Verify Email</span>}
                    />
                </Col>
            </Row>
        </form>
    )
}

export default VerifyAccountSection
