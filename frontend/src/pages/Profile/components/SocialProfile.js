import clsx from 'clsx';
import { InputCol } from 'components/Forms/components';
import { Col, Row } from 'components/HTML';
import { SettingsContext } from 'contexts';
import { controlProps } from 'globals/js';
import { useMemo, useState, useContext } from 'react';
import { SocialIcon, SocialMediaLinkBtn } from '.';

const SocialProfile = ({
	idx,
	last,
	profile,
	setProfiles,
	profiles,
	action,
	setAction,
	userSocial,
	loading,
	onUpdate,
	onDelete
}) => {

	const { isXLarge, isXSmall } = useContext(SettingsContext).screen;

	const activeProfile = useMemo(() => {
		if(!userSocial?.length) {
			return null
		}
		const aprof = userSocial.find(_ => _?.media === profile.media)
		return aprof || null
	} , [userSocial, profile.media])

	const [profileName, setProfileName] = useState(profile?.profileName);

	const onBlurHandler = () => {
		setProfiles(prev =>
			[...prev.map(_ => _.media !== profile?.media ? _ : { ..._, profileName })]);
	}

	return (
		<Row className={clsx(
			isXSmall ? 'g-1' : 'g-2',
			idx === last ? 'mb-3' : 'mb-4',
			!idx && 'mt-3'
		)}>
			<Col cols="1" className="my-auto ">
				<SocialIcon icon={profile.media} inline={true} />
			</Col>
			{isXLarge && (
				<Col cols="6 lg-2" className="my-auto">
					<div className={activeProfile?.profileName ? "text-primary" : "text-secondary"}>
						<>
							{activeProfile?.profileName ? (
								<a
									className="link-hover"
									{...controlProps.newTab(profile.baseLink + activeProfile?.profileName)}
									role="button"
								>{profile.name}</a>
							) : profile.name}
						</>
					</div>
				</Col>
			)}
			<InputCol.Text
				id={`ssmedia${profile.media}`}
				value={profileName}
				onChange={setProfileName}
				maxLength="30"
				placeholder={`${profile.name} user id`}
				onBlur={onBlurHandler}
				cols="6"
			/>
			<Col cols="5 sm-4 lg-3" className="my-auto">
				<div className="text-end">
					<SocialMediaLinkBtn
						mediaID={profile.media}
						action={action}
						setAction={setAction}
						activeTest={activeProfile?.profileName}
						loading={loading}
						onUpdate={onUpdate}
						setProfiles={setProfiles}
						profiles={profiles}
						onDelete={onDelete}
					/>
				</div>
			</Col>
		</Row>
	)
}

export default SocialProfile
