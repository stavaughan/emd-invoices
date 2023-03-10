import { ActivityFeed } from 'components/Lists/Activity';

const FeedItems = ({
	activitiesModalID,
	activityData,
	unitLabel,
	isLoading
}) => {

    return (
        <div>
            <ActivityFeed
                title='Activity log'
                type="activity"
                types="activities"
                listData={activityData}
                unitLabel={`this ${unitLabel}`}
                modalID={activitiesModalID}
				isLoading={isLoading}
                hr={true}
            />
        </div>
    )
}

export default FeedItems
