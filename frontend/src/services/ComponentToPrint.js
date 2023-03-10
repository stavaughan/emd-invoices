import { useRef, useState, useCallback, useEffect } from 'react';
import { useReactToPrint } from "react-to-print";
import { PrintButton } from 'components/Buttons/Type';
import Classes from './styles/print.module.scss';

const ComponentToPrint = ({
	top,
	right,
	printRef,
	documentTitle,
	children
}) => {

	const beforePrintResolve = useRef(null);

	const [loading, setLoading] = useState(false);

	const loadItemToPrint = useCallback(() => {
		return new Promise((resolve) => {
			beforePrintResolve.current = resolve;
			setTimeout(() => {
				setLoading(false);
				resolve();
			}, 2000);
		});
	}, []);

	useEffect(() => {
		let mounted = true;
		if (mounted && loading) {
			loadItemToPrint()
		}
		return () => mounted = false;
	}, [loadItemToPrint, loading])

	const handlePrint = useReactToPrint({
		content: () => printRef.current,
		documentTitle: documentTitle + '_' + new Date().getTime(),
		onBeforeGetContent: () => setLoading(true),
		removeAfterPrint: true
	});

	useEffect(() => {
		if (typeof beforePrintResolve.current === "function") {
			beforePrintResolve.current();
		}
	}, []);

	return (
		<div className="position-relative">
			<PrintButton
				loading={loading}
				handlePrint={handlePrint}
				className="position-absolute"
				setLoading={setLoading}
				style={{
					top: top || '-7%',
					right: right || '50%',
					display: 'inline-block',
					zIndex: '6'
				}}
			/>
			<div className={Classes['print-container']}>
				{children}
			</div>
		</div>
	);
};

export default ComponentToPrint;
