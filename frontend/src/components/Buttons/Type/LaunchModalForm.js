import { ModalButton } from 'components/Buttons';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import Classes from '../styles/LaunchModalForm.module.css';

const LaunchModalForm = ({ label, modalID }) => {

    return (
        <ModalButton
            className={clsx(
				'p-0 btn-sm rounded-pill d-print-none',
				Classes.expandButton
			)}
            modalID={modalID}
        >
            <span className={Classes.expandIcon}>
                <FAIcon icon="plus" />
            </span>
            <span className={Classes.expandText}>
                {label}
            </span>
        </ModalButton>
    )
};

export default LaunchModalForm;
