import clsx from 'clsx';

const CenteredItemsWrapper = ({ gap, margin, children }) => {

    return (
        <div className={clsx(
			'd-grid d-sm-flex justify-content-center',
			margin,
			gap
		)}>
            {children}
        </div>
    )
}

export default CenteredItemsWrapper
