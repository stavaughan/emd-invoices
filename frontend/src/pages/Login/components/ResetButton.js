import { Row, Col } from 'components/HTML';
import { LoginButton } from '.';

const ResetButton = ({ formIsValid }) => {
    return (
        <Row>
            <Col cols="12">
                <LoginButton
                    btnID="passwordResetBtn"
                    className="btn-primary me-md-2 mb-3"
                    disabled={!formIsValid}
                    label={<span className="h4">Submit</span>}
                />
            </Col>
        </Row>
    )
}

export default ResetButton
