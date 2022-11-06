import { RightArrow } from 'globals/img';
import clsx from 'clsx';

const ContinueButton = (props) => {

    const {
        length,
        currentStep,
        setCurrentStep,
        disableContinue
    } = props;

    const onContinue = (e) => {
        e.preventDefault();
        if(currentStep < length){
            setCurrentStep(currentStep + 1);
        }
    };

    return (
        <button
            type="button"
            className={clsx(
				'btn btn-light-primary-reverse',
				currentStep < length ? 'show' : 'hide'
			)}
            onClick={onContinue}
            disabled={disableContinue}
        >
            <span className="svg-icon svg-icon-4 ms-1 me-0">
                <span className="me-2">Continue</span>
                <RightArrow />
            </span>
        </button>
    )
}

export default ContinueButton
