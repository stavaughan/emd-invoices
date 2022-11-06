import { ModalFormWrapper } from 'components/Modals';

const APIModalForm = ({
	entering,
	modalID,
	name,
	size,
	modalTitle,
	setDisplay,
	children,
	modalClose
}) => {

    return (
        <ModalFormWrapper
            labelID={`${modalID}Label`}
            modalID={modalID}
            modalTitle={name ? modalTitle + ' - ' + name : modalTitle}
            handleModalClose={() => setDisplay(true)}
			modalClose={modalClose}
            entering={entering}
            classes={{ dialogClass: `modal-fullscreen-sm-down modal-${size || 'lg'}` }}
        >
			{children}
        </ModalFormWrapper>
    )
}

export default APIModalForm
