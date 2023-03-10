import { useMobile } from 'hooks';
import clsx from 'clsx';

const TitleDescriptionSmall = ({ title, description }) => {

	const { isXSmall } = useMobile();

    return (
        <div>
            <div className={clsx(
				isXSmall && 'text-xs',
				"text-dark font-medium"
			)}>{title}</div>
            <div className="text-xs text-capitalize text-secondary">{description}</div>
        </div>
    )
}

export default TitleDescriptionSmall
