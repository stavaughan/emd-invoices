import { useEffect, useCallback } from 'react'
import { toast } from "react-toastify";
import { useSelector } from 'react-redux'
import axios from 'axios';

const useFileUpload = (props) => {

	const {
		file,
		apiPath,
		setPercentage,
		setUploadedFile,
		setSelectedFile,
		ready
	} = props;

	const { user } = useSelector(state => state.auth)
	const token = user?.token;

	const fetchHandler = useCallback(async (abortCont) => {

		if (!ready) return;

		const formData = new FormData()
		formData.append('file', file)

		const config = {
			signal: abortCont.signal,
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${token}`
			},
			onUploadProgress: progressEvent => {
				setPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
				setTimeout(() => setPercentage(0), 2200)
			}
		}

		try {
			const res = await axios.post(apiPath, formData, config);
			const fileKey = await res.data.fileKey;
			const successMsg = await res.data.msg;
			setUploadedFile({ fileName: fileKey });
			toast.success(successMsg, {
				toastId: 'uploadfiledroponsuccess',
				position: 'top-center'
			})
			setTimeout(() => setSelectedFile({}), 800)
		} catch (err) {
			if (err?.response?.status === 500) {
				toast.error('There was a problem with the server.', {
					toastId: 'uploadfiledroperror',
					position: 'top-center'
				})
			} else {
				toast.error(err?.response?.data?.msg, {
					toastId: 'uploadfiledroperror',
					position: 'top-center'
				})
			}
			setTimeout(() => setSelectedFile({}), 200)
		}
	}, [apiPath, file, ready, token, setPercentage, setSelectedFile, setUploadedFile])

	useEffect(() => {
		let mounted = true;
		const abortCont = new AbortController();
		if (mounted) fetchHandler(abortCont);
		return () => {
			abortCont.abort();
			mounted = false;
		}
	}, [fetchHandler]);
}

export default useFileUpload
