import clsx from "clsx";

const HighlightedMessage = ({ message, bottom, color, highlight }) => {

    const MessageElem = () => <>{highlight ? <span className="highlighted">{message}</span> : message}</>;

    return (
        <>
            {bottom ? (
                <div className={clsx(`text-${color || 'success'}`, 'fw-light')}>
                    <MessageElem />
                </div>
            ) : (
                <span className={clsx(`text-${color || 'success'}`, 'ms-2 fw-light')}>
                    <MessageElem />
                </span>
            )}
        </>
    )
}

export default HighlightedMessage
