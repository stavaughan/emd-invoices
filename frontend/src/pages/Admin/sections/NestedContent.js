import { Warning } from 'components/labels';
import { Global } from 'globals/js';
import { Input } from 'components/Forms/Inputs';
import { DeleteButton } from 'components/Buttons/Type';

const NestedContent = ({
	id,
	email,
	phone,
	setUserRoles,
	displayRole,
	onCancelRoleSelect,
	roles
}) => {

	return (
		<div className="d-flex justify-content-between align-items-center">
			<div className="d-flex flex-column">
				<div className="pt-1">
					<abbr title="email">email</abbr>
					<a
						href={`mailto:${email}`}
						className="ms-2 link-hover text-nowrap"
					>
						{email}
					</a>
				</div>
				<div className="py-1">
					<abbr title="phone">phone</abbr>
					{phone ? (
						<a href={`tel:${phone}`} className="ms-2 link-hover text-nowrap">
							{Global.formatPhone(phone)}
						</a>
					) : <Warning className="ms-2">Missing phone number</Warning>}
				</div>
			</div>
			{(displayRole?.role && displayRole?.id === id) && (
				<div className="d-flex justify-content-end align-items-center me-2">
					<Input.Dropdown
						cols="4"
						id={`userroleselect${id}`}
						selected={displayRole?.role || ''}
						onChange={setUserRoles}
						optionData={roles}
						selectLabel="Select Role"
						flush={true}
						small={true}
					/>
					<span className="ms-2 my-auto">
						<DeleteButton deleteButtonHandler={onCancelRoleSelect} small />
					</span>
				</div>
			)}
		</div>
	)
};

export default NestedContent
