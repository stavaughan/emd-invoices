import { useEffect, useState, useCallback, useContext } from 'react';
import { InputCol, GroupInputRow } from 'components/Forms/components';
import { ContactEmailInput } from 'components/Forms/Inputs';
import { DualButtonGroup } from 'components/Buttons';
import { useAdminData } from 'pages/Admin/components';
import { SettingsContext } from 'contexts';
import { useClear } from 'hooks';
import { Row, Col } from 'components/HTML';

const NewUserInviteForm = ({
	formData,
	isLoading,
	setFormData,
	setFetchReady,
	setEntering,
	entering,
	clear
}) => {

	const { isXSmall, isSmall } = useContext(SettingsContext).screen;

	const [loadingCancel, setLoadingCancel] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault()
		setFetchReady(true);
	}

	const onClearState = (e) => {
		e.preventDefault()
		setFetchReady(false)
		setLoadingCancel(true)
	}

	const setValue = (field, value) => setFormData(prev => ({
		...prev,
		[field]: value
	}));

	const clearStates = useCallback(() => {
		setFormData(prev => ({
			firstName: '',
			lastName: '',
			email: '',
			userRole: 'approvedvisitor'
		}));
	}, [setFormData])

	useEffect(() => {
		if(loadingCancel) {
			clearStates();
		}
	}, [loadingCancel, clearStates])

	useClear(clear, clearStates)

	const { rolesData } = useAdminData()

	return (
		<form onSubmit={onSubmit}>
			<GroupInputRow label="New User" rowClass="g-3 pb-4">
				<InputCol.Text
					id="newuserinvitefirstname"
					value={formData.firstName}
					onChange={(value) => setValue('firstName', value)}
					maxLength="50"
					label="First Name"
					required
				/>
				<InputCol.Text
					id="newuserinvitelastname"
					value={formData.lastName}
					onChange={(value) => setValue('lastName', value)}
					maxLength="50"
					label="Last Name"
					required
				/>
				<ContactEmailInput
					id="newuseremailinvite"
					setOwner={setFormData}
					setEntering={setEntering}
					clear={clear}
					required
				/>
			</GroupInputRow>
			<GroupInputRow label="User Role" rowClass="g-3 mb-3">
				<InputCol.RadioSelect
					checkedData={formData.userRole}
					groupID="newuserrolesselect"
					setData={(value) => setValue('userRole', value)}
					optionsData={rolesData}
					labelClass={isXSmall ? 'text-sm' : 'text-base'}
					inputKey="role"
					label="Roles"
					required
				/>
			</GroupInputRow>
			<hr />
			<Row className="my-4">
				<Col cols="12">
					<DualButtonGroup
						clickHandler1={onClearState}
						setLoading1={setLoadingCancel}
						className1="text-secondary"
						className2="btn-primary"
						loading1={loadingCancel}
						loading2={isLoading}
						notShow1={!formData?.email}
						label1="Cancel"
						label2="Submit"
						disabled={!entering}
					/>
				</Col>
			</Row>
			{isSmall && <hr />}
		</form>
	)
}

export default NewUserInviteForm
