import clsx from "clsx";
/**
 *
 * @param {object} props - type: ('flush' | 'horizontal' | 'numbered' | 'numberedFlush' )
 * @returns JSX.Element
 */

const ListGroupWrapper = ({ type, className, children }) => {

    return (
        <ul className={clsx(
			'list-group',
			`list-group-${type === 'numberedFlush' ? 'flush list-group-numbered' : type}`,
			className
		)}>
            {children}
        </ul>
    );
};

export default ListGroupWrapper;
