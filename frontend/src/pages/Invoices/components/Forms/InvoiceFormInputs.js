import { useMemo, useCallback, useContext, useState } from 'react';
import { InputCol } from 'components/Forms/components';
import { Row } from 'components/HTML';
import { NewInvoiceInputs } from '.';
import { InvoicesContext, FormsContext } from 'contexts';
import { useClear } from 'hooks';

const InvoiceFormInputs = () => {

	const {
		clear,
		newItem,
		setNewItem,
		entering,
		setEntering
	} = useContext(FormsContext);

	const [busID, setBusID] = useState('')

	const { selectBusiness, businessOptions } = useContext(InvoicesContext)

	const busOptions = useMemo(() => businessOptions(), [businessOptions])

	const setSelectedBusiness = useCallback((value) => {
		selectBusiness(setNewItem, value)
		setEntering(true)
	}, [selectBusiness, setNewItem, setEntering])

	const onSelectBusiness = (value) => {
		setBusID(value)
		setSelectedBusiness(value)
	};

	useClear(clear, () => setBusID(''))

	return (
		<div className="p-3">
			<Row className="g-3 pb-4">
				<InputCol.Dropdown
					id="invoicebusinesssel"
					cols="12 sm-6"
					optionData={busOptions}
					label="Select Business"
					onChange={onSelectBusiness}
					selected={busID}
				/>
			</Row>
			<NewInvoiceInputs
				setInvoice={setNewItem}
				invoice={newItem}
				setEntering={setEntering}
				entering={entering}
				clear={clear}
			/>
		</div>
	)
}

export default InvoiceFormInputs
