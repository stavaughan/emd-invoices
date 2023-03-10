import clsx from 'clsx';

const PageContainer = ({ fluid, className, children }) => {

    return (
        <div className={clsx(
			fluid ? `container-fluid` : 'container-lg',
			className || 'py-3',
			'ease-in'
		)}>
            {children}
        </div>
    );
};

export default PageContainer;
