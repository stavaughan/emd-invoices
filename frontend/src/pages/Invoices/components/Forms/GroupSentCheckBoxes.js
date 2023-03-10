import { useMemo, useCallback, useState, useLayoutEffect } from 'react'
import { Row, Col } from 'components/HTML'
import { SentCheckBox } from '.'

const GroupSentCheckBoxes = ({
	date,
	itemID,
	invoices,
	setSelectedIDs,
	setRequestData,
	setEntering,
	selectedIDs
}) => {

	const [groupChecked, setGroupChecked] = useState({ all: false, none: false });

	const allIDs = useMemo(() => invoices.map(_ => _._id), [invoices])

	const onUpdateIds = useCallback((id, remove) => {
		const updateIds = (prev) => remove
			? prev.filter(_ => _.id !== id)
			: [...prev, { id }];
		setRequestData(updateIds)
		!!setEntering && setEntering(true)
	}, [setRequestData, setEntering])

	const onSelectAll = useCallback((e) => {
		const isChecked = e.target.checked;
		setSelectedIDs([])
		setRequestData([])
		setGroupChecked(prev => ({
			...prev,
			all: isChecked && true,
			none: !isChecked && true
		}))
		setSelectedIDs(isChecked ? allIDs : [])
		for (const id of allIDs) {
			onUpdateIds(id, !isChecked)
		}
	}, [allIDs, onUpdateIds, setRequestData, setSelectedIDs])

	const isAllChecked = useMemo(() => {
		return !!allIDs.every(id => selectedIDs.includes(id));
	}, [allIDs, selectedIDs])

	const isNoneChecked = useMemo(() => {
		return !!allIDs.every(id => !selectedIDs.includes(id));
	}, [allIDs, selectedIDs])

	useLayoutEffect(() => {
		if (isNoneChecked) {
			setGroupChecked(prev => ({
				...prev,
				all: false,
				none: true
			}))
		} else {
			setGroupChecked(prev => ({ ...prev, none: false }))
		}
	}, [isNoneChecked])

	useLayoutEffect(() => {
		if(isAllChecked) {
			setGroupChecked(prev => ({
				...prev,
				all: true,
				none: false
			}))
		} else {
			setGroupChecked(prev => ({ ...prev, all: false }))
		}
	}, [isAllChecked])

	return (
		<div className="mb-3">
			<label className="form-label text-desat fw-bold">{date}</label>
			<Row className="g-3 mb-2">
				<Col cols="12">
					<div className="form-check">
						<input
							id={itemID}
							className="form-check-input"
							type="checkbox"
							checked={groupChecked.all}
							onChange={onSelectAll}
						/>
						<label
							className="form-check-label"
							htmlFor={itemID}
						>
							Select all - {date}
						</label>
					</div>
				</Col>
			</Row>
			<Row className="g-3 mb-3">
				{invoices.map(invoice => (
					<SentCheckBox
						key={invoice._id}
						invoice={invoice}
						setSelectedIDs={setSelectedIDs}
						onUpdateIds={onUpdateIds}
						selectedIDs={selectedIDs}
						groupChecked={groupChecked}
						setGroupChecked={setGroupChecked}
					/>
				))}
			</Row>
		</div>
	)
}

export default GroupSentCheckBoxes
