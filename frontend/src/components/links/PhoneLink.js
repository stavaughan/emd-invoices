import clsx from 'clsx';
import { useMobile } from 'hooks';

const PhoneLink = ({
	phone,
	formatted,
	extension = '',
	className
}) => {

	const { isXSmall } = useMobile();

    return phone ? (
        <a
            href={`tel:${phone}`}
            className={clsx(
				className,
				isXSmall ? 'text-xs' : 'text-sm',
				'text-nowrap'
			)}
        >
            {formatted + extension}
        </a>
    ) : formatted;
};

export default PhoneLink;
