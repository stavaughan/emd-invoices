import { useCallback } from 'react';
import { LoaderButton } from 'components/Buttons';

const SocialMediaLinkBtn = ({
	mediaID,
	action,
	setAction,
	activeTest,
	onDelete,
	loading,
	onUpdate
}) => {

	const onRemoveAccount = (e) => {
		e.preventDefault()
		setAction({ type: 'remove', id: mediaID })
		onDelete(mediaID)
	};

	const onEditAccount = (e) => {
		e.preventDefault()
		setAction({ type: 'edit', id: mediaID })
		onUpdate()
	};

	const onLinkAccount = (e) => {
		e.preventDefault()
		setAction({ type: 'link', id: mediaID })
		onUpdate()
	};

	const isLoading = useCallback((type) => {
		return (action.type === type)
			&& (action.id === mediaID)
			&& loading;
	}, [action.type, action.id, mediaID, loading])

	return (
		<div className="d-flex justify-content-end align-items-center">
			{activeTest ? (
				<>
					<LoaderButton
						className="text-xs link-hover ps-0 pe-2"
						setOnclick={onRemoveAccount}
						loading={isLoading('remove')}
						label="Remove"
					/>
					<div className="vr text-primary my-2"></div>
					<LoaderButton
						className="text-xs link-hover ps-2 pe-0"
						setOnclick={onEditAccount}
						loading={isLoading('edit')}
						label="Edit"
					/>
				</>
			) : (
				<LoaderButton
					className="text-xs link-hover px-0"
					setOnclick={onLinkAccount}
					loading={isLoading('link')}
					label="Add"
				/>
			)}
		</div>
	)
}

export default SocialMediaLinkBtn;
