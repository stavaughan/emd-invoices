import { useEffect, useState } from 'react';
import { Row, Col } from 'components/HTML';
import { LoginButton } from '.';

const LoginButtons = ({ formDataIsValid, label, disabled }) => {

	const [loginDisabled, setLoginDisabled] = useState(true);

	useEffect(() => {
		if(formDataIsValid && !disabled) {
			setLoginDisabled(false)
		} else {
			setLoginDisabled(true)
		}
	}, [disabled, formDataIsValid])

    return (
        <Row>
            <Col cols="12">
                <LoginButton
                    btnID={`${label.toLowerCase()}Submit`}
                    className="btn-primary me-md-2 font-medium"
                    disabled={loginDisabled}
                    label={label}
                />
            </Col>
        </Row>
    )
}

export default LoginButtons
