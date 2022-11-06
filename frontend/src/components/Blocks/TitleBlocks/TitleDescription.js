import { useMobile } from 'hooks';
import clsx from 'clsx'

const TitleDescription = ({ title, description, className }) => {

	const { isXSmall } = useMobile();

    return (
        <>
            <div className={clsx(
				!isXSmall && 'font-base',
				className,
				'font-semibold text-slate-700'
			)}>
                {title}
            </div>
            {description && (
                <div className={clsx(isXSmall && 'mt-1', 'text-sm text-slate-500')}>
                    {description}
                </div>
            )}
        </>

    )
}

export default TitleDescription
