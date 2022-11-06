import { useCallback, useMemo, useState } from 'react';
import { InputCol, GroupInputRow } from 'components/Forms/components';
import { Global } from 'globals/js';
import { useClear } from 'hooks';

const DateSelectOrCurrent = ({
	idCurrent,
	idNew,
	label,
	setDate,
	clear
}) => {

	const initDate = useMemo(() => {
		const today = new Date();
		return Global._Date.formattedInput(today);
	}, []);

	const [current, setCurrent] = useState(false);
	const [dateValue, setDateValue] = useState(initDate);

	const clearStates = useCallback(() => {
		setCurrent(false);
		setDateValue(initDate);
	}, [initDate]);

	const setDateInput = useCallback((date) => {
		const inputDate = Global._Date.formattedInput(date);
		setDateValue(inputDate);
	}, []);

	const onSetDate = (date) => {
		setDate(date);
		setDateInput(date);
		setCurrent(false);
	}

	const onSelectToday = (checked) => {
		const todayDate = new Date();
		if (checked) {
			setDate(todayDate)
			setDateInput(todayDate);
		}
		setCurrent(checked)
	};

	useClear(clear, clearStates);

	return (
		<GroupInputRow label={label}>
			<InputCol.Toggle
				cols="12"
				label="Use today's date"
				id={idCurrent}
				setToggle={onSelectToday}
				toggle={current}
				size="small"
			/>
			{!current && (
				<InputCol.Date
					value={dateValue}
					cols="12 sm-6 md-4"
					id={idNew}
					onChange={onSetDate}
				/>
			)}
		</GroupInputRow>
	)
}

export default DateSelectOrCurrent
