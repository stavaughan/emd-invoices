import { useEffect, useCallback } from 'react';
import { CancelAlertBtn } from 'components/Buttons';
import { toast } from 'react-toastify';

const useUpdateAlerts = ({
	toastID = '',
	formTitle,
	resetValues,
	setModalClose,
	display,
	setDisplay
}) => {

    const displayMessage = useCallback(() => {

        toast.error(
            <CancelAlertBtn
                formActionComplete={resetValues}
                setDisplay={setDisplay}
				setModalClose={setModalClose}
                type={formTitle}
            />,
            {
				toastId: `updatecancelalert${toastID}`,
                autoClose: false,
                closeButton: false
            }
        )
    }, [formTitle, resetValues, setDisplay, setModalClose, toastID])

    useEffect(() => {
        let mounted = true;
		if(mounted) {
			if (display) {
                displayMessage()
            }
		}
        return () => {
            mounted = false
        }
    }, [display, displayMessage])
}

export default useUpdateAlerts;
