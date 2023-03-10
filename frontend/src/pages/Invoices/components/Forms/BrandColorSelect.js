import { useState } from 'react'
import { HexColorPicker, HexColorInput } from "react-colorful";
import { Col } from 'components/HTML';
import { useClear } from 'hooks';

import '../../../Invoice/styles/invoice.css'

const BrandColorSelect = ({ setValue, clear }) => {

	const [color, setColor] = useState("#aabbcc");

	const onSelectColor = (value) => {
		setColor(value)
		setValue(value)
	};

	useClear(clear, () => setColor("#aabbcc"));

	return (
		<>
			<Col cols="12 sm-6 lg-4">
				<HexColorPicker
					color={color}
					onChange={setColor}
				/>
				<HexColorInput
					color={color}
					className="color-swatch rounded-3"
					onChange={onSelectColor}
					placeholder="Type a color"
					style={{ borderLeftColor: color }}
					prefixed
					alpha
				/>
			</Col>
		</>
	)
}

export default BrandColorSelect
