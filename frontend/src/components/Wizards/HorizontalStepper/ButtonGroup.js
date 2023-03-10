import { SubmitButtonAnimated, ContinueButton, BackButton } from '.';

const ButtonGroup = ({
	length,
	currentStep,
	setCurrentStep,
	showSubmit,
	disableContinue
}) => {

    return (
        <div className="d-flex flex-stack pt-15">
            <div className="me-2">
                <BackButton
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            </div>
            <div className={!showSubmit && currentStep === length ? 'hide' : 'show'}>
                <SubmitButtonAnimated
                    currentStep={currentStep}
                    length={length}
                />
                <ContinueButton
                    length={length}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    disableContinue={disableContinue}
                />
            </div>
        </div>
    )
}

export default ButtonGroup
