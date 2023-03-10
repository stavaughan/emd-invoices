import { useState, useEffect, useCallback } from 'react'
import { uploadCloudinaryImage, resetImages } from 'features/images/imagesSlice';
import { useSetImageURL, useErrorSuccessToast } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';

const useMultiImageItemUpload = ({
	id,
	image,
	api,
	setImages,
	setImageIDs,
	setValue,
	idType
}) => {

	const dispatch = useDispatch();

	const {
		isSuccess,
		isError,
		message,
		uploadImageID,
		isLoading
	} = useSelector((state) => state.images)

	const [percentage, setPercentage] = useState(0);
	const [ready, setReady] = useState(false);

	const { requestData, setRequestData } = useSetImageURL({ file: image })

	useErrorSuccessToast({
		selector: { isSuccess, isError, message },
		displayTest: ready,
		errorID: "editerrimageupload",
		successID: `editsuc${uploadImageID || 'imageupload'}`,
		typeLabel: "Upload",
		reset: resetImages
	})

	const filterOutPreviousImage = useCallback((prevImages, imageID) => {
		if(!prevImages) return [];
		return prevImages.filter(id => id !== imageID);
	}, [])

	const setImageStates = useCallback(() => {
		if(!!setImageIDs) {
			setImageIDs(prev => [
				...filterOutPreviousImage(prev, uploadImageID),
				uploadImageID
			])
		}
		if (!!setValue) {
			setValue(prev => ({
				...prev,
				images: [
					...filterOutPreviousImage(prev?.images, uploadImageID),
					uploadImageID
				]
			}))
		}
		setImages(prev => prev.filter(item => item.path !== image.path))
	}, [filterOutPreviousImage, setImageIDs, setValue, setImages, uploadImageID, image.path])

	useEffect(() => {
		if (uploadImageID && ready) {
			setImageStates()
			let timer = setTimeout(() => {
				setReady(false)
				setRequestData({})
			}, 1000)
			return () => clearTimeout(timer)
		}
	}, [setImageStates, ready, uploadImageID, setRequestData])

	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		setReady(true)
		dispatch(uploadCloudinaryImage({
			api,
			reqData: { ...requestData, idType },
			setPercentage
		}))
	}, [api, dispatch, requestData, idType]);

	const onRemoveImageHandler = (e) => {
		e.preventDefault();
		setImages(prev => prev.filter(item => item.path !== image.path))
	};

	return {
		handleSubmit,
		onRemoveImageHandler,
		isLoading,
		percentage,
		ready
	}
}

export default useMultiImageItemUpload
