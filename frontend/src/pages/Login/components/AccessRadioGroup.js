import { RadioButton } from 'components/Forms/Inputs';
import { Row, Col } from 'components/HTML'
import React from 'react'

const AccessRadioGroup = ({
	className,
	groupID,
	id1,
	id2,
	label1,
	label2,
	onCheckHandler,
	checkedID
}) => {

	return (
		<Row className={className}>
			<Col cols="12">
				<RadioButton
					onCheckHandler={onCheckHandler}
					id={id1}
					groupID={groupID}
					checkedID={checkedID}
					label={label1}
				/>
			</Col>
			<Col cols="12">
				<RadioButton
					onCheckHandler={onCheckHandler}
					id={id2}
					groupID={groupID}
					checkedID={checkedID}
					label={label2}
				/>
			</Col>
		</Row>
	)
}

export default AccessRadioGroup
