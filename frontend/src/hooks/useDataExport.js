import { useCallback, useState, useEffect } from "react";

const useDataExport = () => {

	const [dataType, setDataType] = useState("json");
	const [mimeType, setMimeType] = useState("application/json");

	const dataTypes = [
		{
			id: "json",
			type: "application/json",
			label: "JSON"
		},
		{
			id: "csv",
			type: "text/csv",
			label: "CSV"
		}
	];

	useEffect(() => {
		if(dataType === "json") {
			setMimeType("application/json");
		} else if(dataType === "csv") {
			setMimeType("text/csv");
		}
	}, [dataType]);

	const exportData = useCallback((data, name) => {
		const file = new Blob([JSON.stringify(data)], { type: mimeType });
		const a = document.createElement('a');
		const url = URL.createObjectURL(file);
		a.href = url;
		a.download = `${name}.json`;
		a.click();
		URL.revokeObjectURL(url);
	}, [mimeType]);

	return { exportData, setDataType, dataTypes, mimeType }
}

export default useDataExport
