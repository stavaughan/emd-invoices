import { useState, useCallback, useEffect } from 'react'
import { useErrorSuccessToast, useImageResize } from 'hooks';
import { useDispatch } from 'react-redux';

const useUploadImage = ({
	ids,
	width,
	selector,
	uploadImageID,
	updateImage,
	collection,
	uploadSlice,
	resetSlice,
	apiPath
}) => {

	const dispatch = useDispatch();

	const [upload, setUpload] = useState({
		changeDetect: false,
		fileInputState: '',
		percentage: 0,
		file: {},
		ready: false
	});

	const onSetUpload = useCallback((key) => (value) => {
		setUpload(prev => ({ ...prev, [key]: value }))
	}, [setUpload])

	const { requestData, setRequestData } = useImageResize({
		file: upload.file,
		width: width || 600
	})

	const clearStates = useCallback(() => {
		setUpload({
			changeDetect: false,
			fileInputState: '',
			percentage: 0,
			file: {},
			ready: false
		})
		setRequestData({})
	}, [setUpload, setRequestData]);

	useErrorSuccessToast({
		selector,
		displayTest: upload.ready,
		errorID: `editerr${ids.toast}`,
		successID: `editsuc${ids.toast}`,
		typeLabel: "Upload",
		reset: resetSlice || null
	})

	useEffect(() => {
		if (uploadImageID && upload.ready) {
			!!updateImage && updateImage()
			setTimeout(() => {
				clearStates()
			}, 1000)
		}
	}, [uploadImageID, upload.ready, updateImage, clearStates])

	const uploadImage = useCallback(() => {
		onSetUpload('ready')(true)
		dispatch(uploadSlice({
			api: apiPath,
			reqData: {
				...requestData,
				collection,
				id: ids.contact,
				...ids
			},
			setPercentage: onSetUpload('percentage')
		}))
	}, [dispatch, ids, collection, apiPath, requestData, uploadSlice, onSetUpload])

	return {
		uploadImage,
		clearStates,
		requestData,
		upload,
		onSetUpload
	}
}

export default useUploadImage
