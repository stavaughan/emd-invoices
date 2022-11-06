import { useRef, useState, useCallback, useEffect } from 'react';
import { useReactToPrint } from "react-to-print";
import { PrintButton } from 'components/Buttons/Type';
import clsx from 'clsx';

const ComponentToPrint = ({
	top,
	componentRef,
	documentTitle,
	wrapperClass,
	className,
	children
}) => {

	const beforePrintResolve = useRef(null);

	const [loading, setLoading] = useState(false);

	const printContent = useCallback(() => componentRef.current, [componentRef]);

	const loadItemToPrint = useCallback(() => {
		return new Promise((resolve) => {
			beforePrintResolve.current = resolve;
			setTimeout(() => {
				setLoading(false);
				resolve();
			}, 2000);
		});
	}, []);

	const handleBeforeContent = () => setLoading(true);

	useEffect(() => {
		let mounted = true;
		if (mounted && loading) {
			loadItemToPrint()
		}
		return () => mounted = false;
	}, [loadItemToPrint, loading])

	const handlePrint = useReactToPrint({
		content: printContent,
		documentTitle,
		onBeforeGetContent: handleBeforeContent,
		removeAfterPrint: true
	});

	useEffect(() => {
		if (typeof beforePrintResolve.current === "function") {
			beforePrintResolve.current();
		}
	}, []);

	return (
		<div className={clsx(wrapperClass, 'position-relative')}>
			<PrintButton
				loading={loading}
				componentRef={componentRef}
				handlePrint={handlePrint}
				className="mt-3 position-absolute"
				style={{
					top: top || '-7%',
					right: '50%',
					display: 'inline-block',
					zIndex: '6'
				}}
			/>
			<div
				ref={componentRef}
				{...className && { className }}
			>
				{children}
			</div>
		</div>
	);
};

export default ComponentToPrint;
