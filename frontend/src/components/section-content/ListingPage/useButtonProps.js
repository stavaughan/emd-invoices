import { useMemo, useCallback } from 'react';
import { controlProps } from 'globals/js';
import clsx from 'clsx';

const useButtonProps = ({
	itemID,
	sentStatus,
	editID,
	setEditID,
	rowSelectFN,
	setDeleteID,
	hoverProps,
	setEditSubmit,
	printModalID,
	loading,
	print
}) => {

	const btnClass = useCallback((colorClass, hide) => {
		const sent = sentStatus && sentStatus === 'sent';
		const hoverColor = ({ hid, iid, aid, color }) => hid === iid && aid !== iid ? 'text-slate-300' : (color || '');
		return clsx(
			hoverColor({ color: colorClass, ...hoverProps, }),
			(hide && sent && print) && 'hide',
		)
	}, [hoverProps, print, sentStatus]);

	const buttonProps = useMemo(() => ([
		{
			_id: `invIconEdit${itemID}`,
			iconClass: btnClass('text-blue-400', true),
			...editID === itemID ? {
				label: 'save',
				handleClick: () => setEditSubmit(true)
			} : {
				icon: ['far', 'edit'],
				handleClick: () => setEditID(itemID)
			}
		},
		{
			_id: `invIconCancel${itemID}`,
			...editID === itemID ? {
				iconClass: btnClass('text-danger h6 my-auto', true),
				handleClick: () => setEditID(''),
				icon: 'times',
			} : {
				iconClass: btnClass('text-blue-400', true),
				modalProps: controlProps.modalOpen('deleteConfirmation'),
				handleClick: () => setDeleteID(itemID),
				icon: loading ? 'circle-notch' : ['far', 'trash-alt'],
			}
		},
		...print ? [{
			_id: `invIconPrint${itemID}`,
			iconClass: btnClass('text-danger-soft'),
			handleClick: () => rowSelectFN(itemID),
			icon: ['far', 'file-pdf'],
			modalProps: controlProps.modalOpen(printModalID)
		}] : []
	]), [
		btnClass,
		editID,
		itemID,
		loading,
		print,
		printModalID,
		rowSelectFN,
		setDeleteID,
		setEditID,
		setEditSubmit
	]);

	return { buttonProps };
}

export default useButtonProps;
