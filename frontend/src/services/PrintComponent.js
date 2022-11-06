import { useRef, useState, useCallback, useEffect } from 'react';
import { LoaderButton } from 'components/Buttons';
import { useReactToPrint } from "react-to-print";
import { themeClasses } from 'theme';
import clsx from 'clsx';

const PrintComponent = ({ componentRef, documentTitle, disable, margin = '' }) => {

    const { button } = themeClasses;
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
    }, [])

    const handleBeforeContent = () => setLoading(true);

    useEffect(() => {
        let mounted = true;
        if(mounted && loading) {
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
        <LoaderButton
            className={clsx(button.icon.light, margin)}
            setOnclick={handlePrint}
            setLoading={setLoading}
            loading={loading}
			disabled={disable}
            icon="print"
        />
    );
};

export default PrintComponent;
