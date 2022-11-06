import { LoadingSkeletonRow } from '.';

const LoadingSkeleton = () => {
    return (
        <div className="px-3">
            <div className="list-group list-group-flush list-group-activity my-n3 gap-2 py-3">
                <div className="list-group-item py-3">
                    {[1,2,3,4].map(item => (
                        <LoadingSkeletonRow key={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LoadingSkeleton
