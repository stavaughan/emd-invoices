import { Button } from '..';

const CloseButton = ({ handleClose }) => {
    return (
        <Button
            type="button"
            className="btn-close btn-text-primary fw-bolder shadow-sm rounded-circle"
            rest={{
                'aria-label': 'Close',
                onClick: handleClose
            }} 
        />
    );
};

export default CloseButton
