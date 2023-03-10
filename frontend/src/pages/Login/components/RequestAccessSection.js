import { EmailInput, LoginButton, NameInputElements } from '.';
import { Row, Col } from 'components/HTML';

const RequestAccessSection = (props) => {

    const {
        setFetchReady,
        dispatchEmail,
        dispatchFName,
        dispatchLName,
        emailIsValid,
        fNameIsValid,
        lNameIsValid,
        formIsValid
    } = props;

    const onSubmit = (e) => {
        e.preventDefault()
        setFetchReady(true);
    }

    return (
        <form onSubmit={onSubmit}>
            <NameInputElements
                dispatchFName={dispatchFName}
                dispatchLName={dispatchLName}
                fNameIsValid={fNameIsValid}
                lNameIsValid={lNameIsValid}
            />
            <EmailInput
                dispatchEmail={dispatchEmail}
                emailIsValid={emailIsValid}
				required
            />
            <Row>
                <Col cols="12">
                    <LoginButton
                        btnID="accountAccessRequestBtn"
                        className="btn-primary me-md-2 mt-3"
                        disabled={!formIsValid}
                        label="Submit"
                    />
                </Col>
            </Row>
        </form>
    )
}

export default RequestAccessSection
