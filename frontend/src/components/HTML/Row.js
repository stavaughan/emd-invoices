import clsx from 'clsx';

const Row = ({ className, rowProps, style, children }) => {

    return (
        <div
            className={clsx('row', className)}
			{...rowProps}
            {...style && {style}}
			children={children}
		/>
    )
}

export default Row
