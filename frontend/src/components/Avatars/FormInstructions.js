import { useMobile } from 'hooks';
import clsx from 'clsx'

const FormInstructions = () => {

	const { isXSmall } = useMobile();

    return (
        <div className="ms-3">
            <div className={clsx(
				!isXSmall && 'text-base',
				"font-semibold text-dark"
			)}>
                Your Profile Image
            </div>
            <div className="text-xs font-normal text-secondary">PNG or JPG no bigger than 800 x 800px.</div>
        </div>
    )
}

export default FormInstructions
