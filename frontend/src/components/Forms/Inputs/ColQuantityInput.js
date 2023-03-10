import { QuantitySelector } from 'components/Forms/Inputs'
import { Col } from 'components/HTML'
import { useEffect, useState } from 'react'

const ColQuantityInput = ({ id, setQuantity, quantity }) => {

	const [syntheticLoading, setSyntheticLoading] = useState(false);

	useEffect(() => {
		if (syntheticLoading) {
			let timer = setTimeout(() => {
				setSyntheticLoading(false);
			}, 300);
			return () => clearTimeout(timer);
		}
	}, [syntheticLoading]);

	const onSetQuantity = (value) => {
		setSyntheticLoading(true);
		const qty = Math.abs(value);
		setQuantity(qty);
	};

	return (
		<Col cols="4 lg-2">
			<label
				htmlFor={id}
				className="block text-sm font-normal text-secondary pb-2"
			>
				Quantity
			</label>
			<div id={id}>
				<QuantitySelector
					qty={quantity || 1}
					loading={syntheticLoading}
					setData={onSetQuantity}
				/>
			</div>
		</Col>
	)
}

export default ColQuantityInput
