import React from 'react';
import { LoaderButton } from '..';

const DualButtonGroup = (props) => {

	const {
		disabled,
		notShow1,
		clickHandler1,
		clickHandler2,
		afterLoading1,
		afterLoading2,
		setLoading1,
		setLoading2,
		className1,
		className2,
		loading1,
		loading2,
		label1,
		label2,
		type2
	} = props;

	return (
		<>
			{!notShow1 && (
				<LoaderButton
					type="button"
					className={`${className1} me-2`}
					setOnclick={clickHandler1}
					afterLoading={afterLoading1 || ''}
					setLoading={setLoading1}
					loading={loading1}
					label={label1}
					wait
				/>
			)}
			{(label2 && !loading1) && (
				<LoaderButton
					type={type2 || "submit"}
					className={className2}
					setOnclick={clickHandler2}
					afterLoading={afterLoading2 || ''}
					setLoading={setLoading2}
					disabled={disabled}
					loading={loading2}
					label={label2}
					wait
				/>
			)}
		</>
	)
}

export default DualButtonGroup
