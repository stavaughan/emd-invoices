import { PreviewAvatar, AvatarImage } from ".";
import { ContactAvatar } from "..";

const ProfileImage = ({ selectedName, selectedURL, pid, loading }) => {
	return (
		<>
			{selectedURL ? (
				<PreviewAvatar
					selectedURL={selectedURL}
					selectedName={selectedName}
					size="lg"
				/>
			) : (
				<>
					{pid ? (
						<AvatarImage pid={pid} size="lg" loading={loading} />
					) : (
						<ContactAvatar className="me-2" icon="user" size="2" />
					)}
				</>
			)}
		</>
	);
};

export default ProfileImage;
