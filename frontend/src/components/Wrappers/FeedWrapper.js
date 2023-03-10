import { ActivityItemsWrapper } from '.'

const FeedWrapper = (props) => {

    const { title, modalID, type, hr } = props;

    return (
        <div>
            {hr && <hr />}
            <ActivityItemsWrapper
                title={title}
                modalID={modalID}
                type={type}
            >
                {props.children}
            </ActivityItemsWrapper>
        </div>
    )
}

export default FeedWrapper
