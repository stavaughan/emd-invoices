import React from 'react';
import clsx from 'clsx';
import { DualButtonGroup } from '..';

const CancelDeleteGroup = (props) => {

	const {
		handleOnClick,
		handleOnDelete,
		deleteLabel,
		submitLabel,
		setLoadingCancel,
		loadingCancel,
		setLoadingSubmit,
		loadingSubmit,
		afterLoadingSubmit,
		afterLoadingCancel,
		disabled
	} = props;

	const label2 = submitLabel ? submitLabel === 'hide' ? '' : submitLabel : 'Update';

	return (
		<div className="pe-3">
			<DualButtonGroup
				clickHandler1={handleOnDelete}
				clickHandler2={handleOnClick}
				setLoading1={setLoadingCancel}
				setLoading2={setLoadingSubmit}
				className1={clsx(
					'btn-link h5 my-0',
					!deleteLabel || deleteLabel === 'Delete'
						? 'text-danger' : 'text-secondary'
				)}
				className2="btn-primary h5 rounded-pill my-0"
				afterLoading1={afterLoadingCancel}
				afterLoading2={afterLoadingSubmit}
				loading1={loadingCancel}
				loading2={loadingSubmit}
				label1={deleteLabel || 'Delete'}
				label2={label2}
				disabled={disabled}
			/>
		</div>
	)
}

export default CancelDeleteGroup
