import { LoaderButton } from 'components/Buttons';
import clsx from 'clsx';

const ImageUploadButtons = ({
	className,
	onRemoveImage,
	handleSubmit,
	margSubmit,
	margCancel,
	btnColor,
	loading
}) => {

    return (
        <div className={className || "mb-4 mt-2"}>
            {!btnColor && (
                <LoaderButton
                    type="button"
                    className={clsx(
						'btn-sm me-1 text-danger',
						margCancel
					)}
                    setOnclick={onRemoveImage}
                    icon="times"
                />
            )}
            <LoaderButton
                type="button"
                className={clsx(
					'btn-sm',
					btnColor || 'btn-text-primary',
					margSubmit
				)}
                setOnclick={handleSubmit}
                loading={loading}
                icon="upload"
            />
            {btnColor && (
                <LoaderButton
                    type="button"
                    className={clsx(
						'btn-sm ms-1 my-0 py-0',
						btnColor,
						margCancel
					)}
                    setOnclick={onRemoveImage}
                    icon="times"
                />
            )}
        </div>
    )
}

export default ImageUploadButtons
