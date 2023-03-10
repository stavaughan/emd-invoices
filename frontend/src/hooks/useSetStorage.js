import { useState, useEffect } from "react";

const useSetStorage = (key, typeKey = 'session', defaultValue = null) => {

	const storage = typeKey === 'session' ? sessionStorage : localStorage;

	const [clear, setClear] = useState(false);

	const [value, setValue] = useState(() => {
		let currentValue;

		try {
			currentValue = JSON.parse(
				storage.getItem(key) || String(defaultValue)
			);
		} catch (error) {
			currentValue = defaultValue;
		}

		return currentValue;
	});

	useEffect(() => {
		if (clear) {
			storage.removeItem(key);
			setClear(false);
		}
	}, [clear, key, storage, value]);

	useEffect(() => {
		if(value !== null)
		storage.setItem(key, JSON.stringify(value));
	}, [value, key, storage]);

	return [value, setValue, setClear];
};

export default useSetStorage;
