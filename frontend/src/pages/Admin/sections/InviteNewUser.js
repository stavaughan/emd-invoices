import { useMemo, useContext } from 'react';
import { TitleDescription } from 'components/Blocks';
import { ResponsiveTable } from 'components/Tables';
import { Row, Col } from 'components/HTML';
import { SettingsContext } from 'contexts';
import { useAdminData } from 'pages/Admin/components';
import { SiteData } from 'data';
import { NewUserInviteForm } from 'pages/Admin/forms';

const InviteNewUser = () => {

	const {
		currentRole,
		permissionsData,
		inviteData,
		setInviteData,
		setInviteReady,
		clearInvite,
		isLoading,
		entering,
		setEntering
	} = useAdminData()

	const { isXLarge, isSmall } = useContext(SettingsContext).screen;

	const permissions = useMemo(() => ({
		title: `${currentRole(inviteData.userRole)} Permissions`,
		data: permissionsData(inviteData.userRole)
	}), [inviteData.userRole, currentRole, permissionsData])

	return (
		<section>
			<Row>
				<Col
					cols="12 lg-6"
					{...isXLarge && { className: "border-end" }}
				>
					<NewUserInviteForm
						selRole={inviteData.userRole}
						isLoading={isLoading}
						setFormData={setInviteData}
						setFetchReady={setInviteReady}
						formData={inviteData}
						entering={entering}
						setEntering={setEntering}
						clear={clearInvite}
					/>
				</Col>
				<Col {...isSmall && { className: 'mb-3' }}>
					<div className={isXLarge ? "mb-4" : "mb-3"}>
						<TitleDescription
							title={permissions.title}
							description={SiteData.permissionDescription}
							className="my-2"
						/>
					</div>
					<ResponsiveTable tableContent={permissions.data} />
				</Col>
			</Row>
		</section>
	);
};

export default InviteNewUser;
