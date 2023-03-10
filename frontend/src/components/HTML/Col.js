import clsx from 'clsx';

const Col = ({
	cols,
	className,
	children,
	colProps,
	...props
}) => {

    const colString = (propStr) => {
        const colArray = propStr.split(' ');
        return colArray.map(cItem => `col-${cItem}`).join(' ');
    };

    return (
        <div
            className={clsx(
				cols ? colString(cols) : 'col',
				className
			)}
			{...colProps || {}}
			{...props}
			children={children}
		/>
    )
}

export default Col;
