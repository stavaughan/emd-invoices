import { Warning } from 'components/labels';
import { Global } from 'globals/js';
import { Input } from 'components/Forms/Inputs';

const NestedContent = ({
	id,
	email,
	phone,
	setUserRoles,
	displayRole,
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
				<div className="me-4">
					<Input.Dropdown
						cols="4"
						id={`userroleselect${id}`}
						selected={displayRole?.role || ''}
						onChange={setUserRoles}
						optionData={roles}
						selectLabel="Select a role"
						small={true}
					/>
				</div>
			)}
		</div>
	)
};

export default NestedContent
