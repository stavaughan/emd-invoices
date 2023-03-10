import { ItemsWrapper } from 'components/Wrappers';
import { ItemWrapper } from 'components/Wrappers';
import { useItemDelete, useMobile } from 'hooks';
import { IconCol, TitleDescription, ActivityDetail } from '.';

const ActivityItems = ({ listData, unitLabel, types }) => {

	const { isXSmall } = useMobile();

	const { setDeleteId } = useItemDelete('activities');

	return (
		<ItemsWrapper
			length={listData?.length}
			message={`No ${types} have been entered for ${unitLabel}`}
			className="px-3"
		>
			{listData?.length ? listData.map(activity => (
				<ItemWrapper key={activity._id}>
					{!isXSmall && <IconCol type={activity?.type} />}
					<div className="col">
						<TitleDescription
							title={activity?.title}
							description={activity?.description}
							onDelete={() => setDeleteId(activity?._id)}
						/>
						<ActivityDetail
							owner={activity?.userID}
							accountIDs={activity?.accountIDs}
							contactIDs={activity?.contactIDs}
							createdAt={activity?.createdAt}
						/>
					</div>
				</ItemWrapper>
			)) : null}
		</ItemsWrapper>
	)
}

export default ActivityItems
