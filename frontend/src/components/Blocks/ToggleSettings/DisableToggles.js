import { useCallback, useState } from 'react';
import { LinkHoverBtn, LoaderButton } from 'components/Buttons';
import { AlertBanner } from 'components/Alerts';
import { useMobile } from 'hooks';
import { useToggleMethods } from '.';
import clsx from 'clsx';

const DisableToggles = ({
	storageKey,
	setToggles,
	setLoading,
	toggles,
	message,
	loading,
	allFalse,
	type,
	label
}) => {

	const { resetToggles } = useToggleMethods();

	const { isXSmall } = useMobile();

	const [showMessage, setShowMessage] = useState(false);

	const disableToggles = useCallback(() => {
		setToggles(resetToggles)
		const storage = type ? sessionStorage : localStorage;
		storage.setItem(storageKey, JSON.stringify(resetToggles(toggles)));
		setShowMessage(false)
	}, [setToggles, resetToggles, storageKey, toggles, type]);

	return (
		<>
			<div className={clsx(allFalse ? 'hide' : 'show', 'mb-2')}>
				<LinkHoverBtn
					className={clsx('ps-0', showMessage ? 'd-none' : 'd-block')}
					rest={{ onClick: () => setShowMessage(!showMessage) }}
				>
					{label}
				</LinkHoverBtn>
				{showMessage && (
					<>
						<AlertBanner
							onClose={() => setShowMessage(false)}
							className="mb-2"
							dismissable
						>
							{message}
						</AlertBanner>
						<LoaderButton
							className={clsx(
								isXSmall ? 'btn-sm' : 'text-sm',
								'link-hover ps-1 text-decoration-underline'
							)}
							setOnclick={disableToggles}
							afterLoading={setLoading}
							loading={loading}
							label="Reset toggles"
							wait
						/>
					</>
				)}
			</div>
		</>
	)
}

export default DisableToggles
