import React from 'react'
import { LoaderButton } from 'components/Buttons';
import { themeClasses } from 'theme';
import clsx from 'clsx';

const { button } = themeClasses;

const PrintButton = ({
	handlePrint,
	setLoading,
	loading,
	className,
	style
}) => {

	return (
		<div
			className={clsx("d-print-none", className)}
			{...style && { style }}
		>
			<LoaderButton
				className={button.icon.light}
				setOnclick={handlePrint}
				setLoading={setLoading}
				loading={loading}
				icon="print"
			/>
		</div>
	)
}

export default PrintButton
