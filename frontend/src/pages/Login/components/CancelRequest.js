import { Row, Col } from 'components/HTML'
import { toast } from 'react-toastify'

const CancelRequest = ({ label, setShowMessage, navigate, message }) => {

    const onCancelHandler = (e) => {
        e.preventDefault()
        if(label && label !== 'Close') {
            toast.info(message)
        }
        if(setShowMessage) {
            setShowMessage(false)
        }
        navigate('/login')
    }

    return (
        <Row className="text-center mb-4">
            <Col className="mx-auto">
                <button
                    className="btn btn-light"
                    onClick={onCancelHandler}
                >
                    {label || 'Cancel'}
                </button>
            </Col>
        </Row>
    )
}

export default CancelRequest
