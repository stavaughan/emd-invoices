import clsx from 'clsx';

const CardBody = ({ classBody, children, style }) => {

    return (
        <div
			className={clsx('card-body', classBody)}
			{...style && { style }}
		>
            {children}
        </div>
    );
};

export default CardBody;
