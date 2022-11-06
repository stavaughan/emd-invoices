import React, { createContext, useState, useEffect, useRef, useCallback } from 'react';
import { useReactToPrint } from "react-to-print";

const PrintContext = createContext({
	loading: false,
	handlePrint: () => { },
	componentID: '',
});

export const PrintContextProvider = ({ children }) => {

	const componentRef = useRef(null);
	const beforePrintResolve = useRef(null);

	const [componentID, setComponentID] = useState(false);
	const [docTitle, setDocTitle] = useState('');
	const [loading, setLoading] = useState(false);

	const loadItemToPrint = useCallback(() => {
		return new Promise((resolve) => {
			beforePrintResolve.current = resolve;
			setTimeout(() => {
				setLoading(false);
				setDocTitle('');
				setComponentID('');
				componentRef.current = null;
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

	const printContent = useCallback(() => componentRef?.current || null, [componentRef]);

	const handlePrint = useReactToPrint({
		content: printContent,
		documentTitle: docTitle,
		onBeforeGetContent: () => setLoading(true),
		removeAfterPrint: true
	});

	useEffect(() => {
		if (typeof beforePrintResolve.current === "function") {
			beforePrintResolve.current();
		}
	}, []);

	return (
		<PrintContext.Provider
			value={{
				loading,
				handlePrint,
				componentRef,
				setDocTitle,
				componentID,
				setComponentID,
			}}
		>
			{children}
		</PrintContext.Provider>
	);
};

export default PrintContext;
