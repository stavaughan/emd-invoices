import { useState, useEffect, useCallback } from 'react';
import { featuresLogic } from 'features';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import axios from 'axios';

const { errorMessage, configAuth } = featuresLogic;

const usePdfFileFetch = ({ url, fileID, setFile, ready }) => {

	const { user } = useSelector(state => state.auth)
    const token = user?.token;

	const [fetchData, setFetchData] = useState({
		error: null,
		message: '',
		loading: false
	});

	const fetchDataHandler = useCallback(async (abortCont) => {

		if (!ready) return;

		setFetchData(prev => ({ ...prev, loading: true }));

		try {
			const response = await axios.get(url + fileID, {
				...configAuth(token),
				responseType: 'blob',
				signal: abortCont.signal
			});
			const data = await response.data;

			const file = new Blob([data], { type: 'application/pdf' });
			const fileURL = URL.createObjectURL(file);
			window.open(fileURL);
			URL.revokeObjectURL(file);
			setFile('');
			setFetchData(prev => ({
				...prev,
				loading: false
			}));
		} catch (err) {
			const message = errorMessage(err, 'fetch pdf document file');
			toast.error(`Document file ${message}`, {
				toastId: `docfileapi${fileID}`,
				position: "top-center"
			})
			setFile('');
			setFetchData(prev => ({
				...prev,
				message: err.name === 'AbortError' ? '"GET" fetch aborted' : '',
				error: message,
				loading: false
			}));
		}
	}, [fileID, url, setFile, ready, token]);

	useEffect(() => {
		let mounted = true;
		const abortCont = new AbortController();
		const identifier = setTimeout(() => {
			if (mounted) {
				fetchDataHandler(abortCont)
			}
		}, 2000);
		return () => {
			clearTimeout(identifier);
			abortCont.abort();
			mounted = false;
		}

	}, [fetchDataHandler]);

	return { fetchData };
};

export default usePdfFileFetch
