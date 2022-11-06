import { useCallback } from 'react';
import { DeleteGroupBtn } from 'components/Buttons/Type';
import { Button } from 'components/Buttons';
import { useMobile } from 'hooks';
import { toast } from 'react-toastify';
import { controlProps } from 'globals/js';
import clsx from 'clsx'

import Classes from '../EmptyState/styles/EmptyStates.module.css'

const IconContentList = ({
	stepsID,
	data,
	setSelelectedID,
	desField,
	groupCount,
	setDeleteId
}) => {

	const { isXSmall } = useMobile();

	const displayMessage = useCallback((sid, id, message) =>
		toast.info(message, {
			toastId: `getstartedbutton${sid + id}`,
			autoClose: false,
			closeButton: true,
			theme: 'colored',
		}), []);

	const successMessage = useCallback((sid, id, message) =>
		toast.success(message, {
			toastId: `getstartedsuccess${sid + id}`,
			autoClose: true,
			theme: 'colored',
		}), []);

	return (
		<ul className="px-2 border-bottom border-slate-200 pb-5 pt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
			{data.map((item, idx) => (
				<li key={item._id} className="flow-root">
					<div className={clsx(
						'position-relative',
						'm-n2 p-2.5',
						'd-flex align-items-center justify-content-start',
						'space-x-4 rounded-xl',
						!item?.disabledMessage && 'hover:bg-gray-50',
						item?.disabledMessage && 'bg-slate-50',
						Classes['focus-within:ring-2'],
						item?.active && Classes.active
					)}
						{...(!item.active && !item.complete) && {
							style: {
								cursor: 'not-allowed',
								opacity: 0.5,
								backgroundColor: '#f5f5f5'
							}
						}}
						{...(item.complete) && {
							style: {
								cursor: 'not-allowed',
								opacity: 0.5,
								backgroundColor: 'var(--green-200)',
								borderColor: 'var(--green-200)',
								color: 'var(--green-900)'
							}
						}}
					>
						<div
							className={clsx(
								item.background,
								'flex-shrink-1 d-flex align-items-center justify-content-center h-16 w-16 rounded-lg'
							)}
							{...item?.style && { style: item.style }}
						>
							<div
								className="fs-3 text-white font-bold"
								style={{
									minWidth: '1.5rem',
									minHeight: '1.5rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									padding: '0',
									margin: '0'
								}}
								aria-hidden="true"
							>
								{idx + 1}
							</div>
						</div>
						<div className="flex-grow-1">
							<div className="d-inline">
								<Button
									className="p-0 text-muted text-start"
									rest={{
										onClick: (e) => {
											e.preventDefault();
											if (item?.disabledMessage) {
												displayMessage(stepsID, item._id, item.disabledMessage)
											}
											if(item?.successMessage) {
												successMessage(stepsID, item._id, item.successMessage)
											}
											if (!item?.disabledMessage && !item?.active) {
												setSelelectedID(item._id);
											}
										},
										...(item?.modalID && !item?.disabledMessage) && controlProps.modalOpen(item.modalID)
									}}
								>
									<span className={clsx(
										!isXSmall && 'text-base',
										'font-medium leading-5'
									)}>{item.title}</span>
									<span
										className="stretched-link"
										aria-hidden="true"
									> &rarr;</span>
								</Button>
								<div className="text-sm text-secondary text-start leading-4">
									{item[desField]}
									{!!groupCount && (
										<span className="ms-2 text-blue-400 text-xs">
											{`(${groupCount(item._id)}`}
											<span className="ms-1">
												{groupCount(item._id) > 1 ? 'items)' : 'item)'}
											</span>
										</span>
									)}
								</div>
							</div>
						</div>
						{(!!setDeleteId && !groupCount(item._id)) && (
							<DeleteGroupBtn setDelete={() => setDeleteId(item._id)} />
						)}
					</div>
				</li>
			))}
		</ul>
	)
}

export default IconContentList
