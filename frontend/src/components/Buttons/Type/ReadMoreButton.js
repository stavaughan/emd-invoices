import { Global, controlProps } from 'globals/js';
import { Button } from 'components/Buttons';

const ReadMoreButton = ({ resource, setDeleteId }) => {

	return (
		<div className="ms-0 pt-3">
			<a
				href={resource?.url}
				className="btn btn-text-primary me-3 my-auto"
				{...Global.openInNewTab}
			>
				Read more
			</a>
			<Button
				className="link-delete my-auto"
				rest={{
					onClick: () => setDeleteId(resource._id),
					...controlProps.modalOpen('deleteConfirmation')
				}}
			>
				Delete
			</Button>
		</div>
	);
};

export default ReadMoreButton;
