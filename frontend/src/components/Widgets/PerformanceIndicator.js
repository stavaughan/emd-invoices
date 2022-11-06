import { IncreaseDecrease } from '../Icons';

const PerformanceIndicator = (props) => {

    const { change, color, size } = props;

    return (
        <>
            {change ? (
                <div className={color ? ' ' + color : ''}>
                    <IncreaseDecrease
                        number={Math.abs(change)}
                        direction={change > 0 ? 'up' : 'down'}
                        size={size}
                    >
                        {props.children}
                    </IncreaseDecrease>
                </div>
            ) : null}
        </>
    );
};

export default PerformanceIndicator
