import { useRef, useCallback, useState, useEffect } from 'react';
const useModalClose = () => {

	const [modalClose, setModalClose] = useState(false);

	const modalRef = useRef();

	const closeModal = useCallback(() => {
		modalRef.current.classList.remove('show');
		modalRef.current.setAttribute('aria-modal', 'false');
		modalRef.current.setAttribute('aria-hidden', 'true');
		modalRef.current.setAttribute('style', 'display: none');
		modalRef.current.setAttribute('data-bs-backdrop', 'false');
		modalRef.current.setAttribute('data-bs-keyboard', 'false');
		modalRef.current.removeAttribute('role');
		document.body.classList.remove('modal-open');
		document.body.removeAttribute('style');
		document.body.lastChild.remove();
	}, []);

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			if (modalClose) {
				closeModal();
				setModalClose(false);
			}
		}
		return () => {
			mounted = false;
		};
	}, [closeModal, modalClose]);

	return { modalRef, modalClose, setModalClose };
}

export default useModalClose;
