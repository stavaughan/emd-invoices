import { useState, useCallback, useEffect } from 'react'
import { useErrorSuccessToast, useImageResize } from 'hooks';
import { useDispatch } from 'react-redux';

const useUploadImage = ({
	ids,
	width,
	selector,
	updateImage,
	collection,
	uploadSlice,
	resetSlice,
	apiPath
}) => {

	const dispatch = useDispatch()

	const [changeDetect, setChangeDetect] = useState(false);
	const [fileInputState, setFileInputState] = useState('');
	const [percentage, setPercentage] = useState(0);
	const [ready, setReady] = useState(false);
	const [file, setFile] = useState({});

	const { requestData, setRequestData } = useImageResize({
		file,
		width: width || 400
	})

	const clearStates = useCallback(() => {
		setChangeDetect(false);
		setFileInputState('');
		setRequestData({})
		setPercentage(0);
		setReady(false);
		setFile({});
	}, [setRequestData]);

	useErrorSuccessToast({
		selector,
		displayTest: ready,
		errorID: `editerr${ids.toast}`,
		successID: `editsuc${ids.toast}`,
		typeLabel: "Upload",
		reset: resetSlice || null
	})

	useEffect(() => {
		if (selector?.uploadImageID && ready) {
			!!updateImage && updateImage()
			clearStates()
		}
	}, [ready, updateImage, selector?.uploadImageID, clearStates])

	const uploadImage = useCallback(() => {
		setReady(true)
		dispatch(uploadSlice({
			api: apiPath,
			reqData: {
				...requestData,
				collection,
				id: ids.contact,
				...ids?.userID && {
					userID: ids.userID,
					savePW: ids?.savePW
				}
			},
			setPercentage
		}))
	}, [dispatch, ids, collection, apiPath, requestData, uploadSlice])

	return {
		uploadImage,
		changeDetect,
		setChangeDetect,
		fileInputState,
		setFileInputState,
		percentage,
		fileName: file?.name,
		setFile,
		clearStates,
		requestData
	}
}

export default useUploadImage
