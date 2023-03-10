import { AlertModal } from 'components/Alerts'

const SubmitAlertModal = (props) => {

    const {
        modalID,
        submitAlert,
        setFetchReady,
        setSubmitAlert,
        dispatchEmail,
        dispatchPassword
    } = props;

    const onCloseAlert = () => {
        setFetchReady(false)
        setSubmitAlert('')
        dispatchEmail({ type: 'RESET' });
        if(dispatchPassword) {
            dispatchPassword({ type: 'RESET' });
        }
    }

    return (
        <AlertModal
            type="danger"
            modalID={modalID}
			modalName="Login Submit Alert"
            modalShow={submitAlert || ''}
            modalTitle={submitAlert}
            onClose={onCloseAlert}
        />
    )
}

export default SubmitAlertModal
