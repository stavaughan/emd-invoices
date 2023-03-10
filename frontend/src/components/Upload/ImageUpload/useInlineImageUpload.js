import { useErrorSuccessToast, useImageResize } from 'hooks';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useInlineImageUpload = ({
	itemID,
	apiPath,
	updateSlice,
	setDataUpdate,
	images,
	resetSlice
}) => {

	const selector = useSelector(state => state.images);

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
		width: 1600
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
		errorID: `editerr${itemID}`,
		successID: `editsuc${itemID}`,
		typeLabel: "Upload",
		reset: resetSlice || null
	})

	useEffect(() => {
		if (selector?.inventoryImageID && upload.ready) {
			setDataUpdate(itemID, {
				images: [...images, selector.inventoryImageID]
			})
			setTimeout(() => {
				clearStates()
			}, 1000)
		}
	}, [selector?.inventoryImageID, upload.ready, clearStates, setDataUpdate, itemID, images])

	const uploadImage = useCallback(() => {
		onSetUpload('ready')(true)
		dispatch(updateSlice({
			api: apiPath,
			reqData: {
				...requestData,
				id: itemID,
				images
			},
			setPercentage: onSetUpload('percentage')
		}))
	}, [dispatch, updateSlice, apiPath, requestData, itemID, images, onSetUpload])

	const hiddenFileInput = useRef(null);

	const onImageInput = useCallback((e) => {
		onSetUpload('changeDetect')(true);
		onSetUpload('file')(e.target.files[0]);
		onSetUpload('fileInputState')(e.target.value);
	}, [onSetUpload]);

	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		uploadImage()
	}, [uploadImage]);

	return {
		upload,
		hiddenFileInput,
		onImageInput,
		handleSubmit,
		requestData,
		selector,
		clearStates
	}
}

export default useInlineImageUpload
