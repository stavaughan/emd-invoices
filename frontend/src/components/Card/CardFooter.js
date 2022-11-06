import clsx from "clsx";

const CardFooter = ({ className, children }) => {

    return (
        <div className={clsx('d-print-none card-footer', className)}>
            {children}
        </div>
    )
};

export default CardFooter;
