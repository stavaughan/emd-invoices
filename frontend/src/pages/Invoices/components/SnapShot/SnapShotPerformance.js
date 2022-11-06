import { PerformanceIndicator } from 'components/Widgets';

const SnapShotPerformance = ({ amount, label, margin }) => {

    return (
        <div className={`mt-${margin || '2'}`}>
            <PerformanceIndicator
                change={amount}
                color="text-secondary"
                size="6"
            >
                <span className="ms-3 small text-info">
                    {label || ''}
                </span>
            </PerformanceIndicator>
        </div>
    )
}

export default SnapShotPerformance
