import clsx from "clsx";

const CardFooter = ({ className, style, children }) => {

    return (
        <div
			className={clsx('d-print-none card-footer', className)}
			{...style && { style }}
		>
            {children}
        </div>
    )
};

export default CardFooter;
