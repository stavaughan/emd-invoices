import { controlProps } from 'globals/js';
import { Button } from 'components/Buttons';

const ReadMoreButton = ({ resource, setDeleteId }) => {

	return (
		<div className="ms-0 pt-3">
			<a
				className="btn btn-text-primary me-3 my-auto"
				{...controlProps.newTab(resource?.url)}
				role="button"
			>
				Read more
			</a>
			<Button
				className="link-delete my-auto"
				rest={{
					onClick: () => setDeleteId(resource._id)
				}}
			>
				Delete
			</Button>
		</div>
	);
};

export default ReadMoreButton;
