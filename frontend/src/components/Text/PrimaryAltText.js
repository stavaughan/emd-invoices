import clsx from 'clsx';

const PrimaryAltText = ({ className, children }) => {
    return (
        <span className={clsx(className, 'user-select-all text-xs')}>
            {children}
        </span>
    );
};

export default PrimaryAltText;
