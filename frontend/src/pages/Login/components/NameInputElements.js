import React from 'react'
import { ValidationInput } from 'components/Forms/Inputs'

const NameInputElements = ({
	dispatchFName,
	dispatchLName,
	fNameIsValid,
	lNameIsValid
}) => {

    return (
        <>
            <ValidationInput
                type="text"
                id="firstName"
                notValid={fNameIsValid === false}
                alertMsg="Please enter your first name"
                autoComplete="given-name"
                changeType="USER_INPUT"
                blurType="INPUT_BLUR"
                dispatch={dispatchFName}
                placeholder="Enter your first name"
                label="First Name"
				required
            />
            <ValidationInput
                type="text"
                id="lastName"
                notValid={lNameIsValid === false}
                alertMsg="Please enter your last name"
                autoComplete="family-name"
                changeType="USER_INPUT"
                blurType="INPUT_BLUR"
                dispatch={dispatchLName}
                placeholder="Enter your last name"
                label="Last Name"
				required
            />
        </>
    )
}

export default NameInputElements
