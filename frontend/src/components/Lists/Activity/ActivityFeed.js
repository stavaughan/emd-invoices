import { FeedWrapper } from 'components/Wrappers';
import { ActivityItems } from './components';
import { LoadingSkeleton } from 'components/LoadingSkeleton';

const ActivityFeed = ({
	title,
	modalID,
	unitLabel,
	isLoading,
	listData,
	types,
	type,
	hr
}) => {

    return (
        <FeedWrapper
            title={title}
            modalID={modalID}
            type={type}
            hr={hr}
        >
            {isLoading ? (
                <LoadingSkeleton />
            ) : (
                <ActivityItems
                    listData={listData}
                    unitLabel={unitLabel}
                    types={types}
                />
            )}
        </FeedWrapper>
    )
}

export default ActivityFeed
