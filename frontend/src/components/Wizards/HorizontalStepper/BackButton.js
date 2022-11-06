import { LeftArrow } from 'globals/img';
import clsx from 'clsx';

const BackButton = ({ currentStep, setCurrentStep }) => {

    const onBackClick = (e) => {
        e.preventDefault();
        if(currentStep > 1){
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <button
            type="button"
            className={clsx(
				'btn btn-md btn-light-primary me-3',
				currentStep > 1 ? 'show' : 'hide'
			)}
            onClick={onBackClick}
        >
            <span className="svg-icon svg-icon-4 me-1">
                <LeftArrow />
                Back
            </span>
        </button>
    );
};

export default BackButton;
