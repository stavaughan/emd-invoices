import clsx from 'clsx';

const CardBody = ({ classBody, children }) => {

    return (
        <div className={clsx('card-body', classBody)}>
            {children}
        </div>
    );
};

export default CardBody;
