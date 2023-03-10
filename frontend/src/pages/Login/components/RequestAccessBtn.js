import { ButtonSubmit, CollapseContentButton } from 'components/Buttons';
import { Col, Row } from 'components/HTML';
import { useState } from 'react';
import { AccessRadioGroup } from '.';

const RequestAccessBtn = ({ navigate, setDisabled }) => {

	const [display, setDisplay] = useState(true);
	const [path, setPath] = useState('requestaccess');

	const onAccountAccess = () => navigate(path === 'requestaccess'
		? '/request-access'
		: '/account-setup');

	return (
		<>
			<hr className="mt-1" />
			<Row className="text-center mb-4">
				<Col className="mx-auto">
					<CollapseContentButton
						label="Don't have an account?"
						setDisplay={setDisplay}
						setDisabled={setDisabled}
						display={display}
					/>
					{!display && (
						<div className="container p-5 bg-slate-50">
							<Row className="g-4 px-3">
								<Col cols="xl-8">
									<AccessRadioGroup
										groupID="userAccess"
										id1="requestaccess"
										id2="accountsetup"
										className="g-2 text-start"
										label1="Request access to an existing account."
										label2="Sign up for a new account."
										onCheckHandler={setPath}
										checkedID={path}
									/>
								</Col>
								<Col cold="6 xl-4">
									<div className="float-xl-end float-start align-text-middle">
										<ButtonSubmit
											type="button"
											label="Submit"
											color="blue"
											onClick={onAccountAccess}
										/>
									</div>
								</Col>
							</Row>
						</div>
					)}
				</Col>
			</Row>
		</>
	)
}

export default RequestAccessBtn
