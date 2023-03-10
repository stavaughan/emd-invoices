import { useState } from 'react';
import { RightArrow } from 'globals/img';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const SubmitButtonAnimated = ({ currentStep, length }) => {

    const [loading, setLoading] = useState(false);

    const onClickSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }

    return (
        <button
            type="button"
            className={clsx(
				'btn btn-md btn-light-primary-reverse me-3',
				currentStep === length ? 'show' : 'hide'
			)}
            onClick={onClickSubmit}
        >
            <span className={loading ? 'hide' : 'show'}>
                <span className="svg-icon svg-icon-3 ms-2 me-0">
                    <span className="me-2">Submit</span>
                    <RightArrow />
                </span>
            </span>
            <span className={loading ? 'show' : 'hide'}>
                Please wait...
                <FAIcon icon="circle-notch" spin={true} className="align-middle ms-2" />
            </span>
        </button>
    )
}

export default SubmitButtonAnimated
