import React from 'react'
import { AlertBanner } from 'components/Alerts'
import clsx from 'clsx';

const InputWrapper = ({
	InvalidFeedBack,
	floating,
	className,
	helperMsg,
	style,
	alert,
	error,
	children
}) => {

	return (
		<>
			<div
				className={clsx(floating && 'form-floating', className)}
				{...style && { style }}
			>
				{children}
				{helperMsg && (
					<div className="alert alert-info text-xs" role="alert">
						{helperMsg}
					</div>
				)}
				{error && <AlertBanner>{alert}</AlertBanner>}
				{InvalidFeedBack && (
					<div className="mt-2 mb-3">
						{InvalidFeedBack}
					</div>
				)}
			</div>
		</>
	)
}

export default InputWrapper
