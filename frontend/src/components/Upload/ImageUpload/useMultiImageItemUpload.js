import { useState, useEffect, useCallback } from 'react'
import { uploadCloudinaryImage, resetImages } from 'features/images/imagesSlice';
import { useSetImageURL, useErrorSuccessToast } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';

const useMultiImageItemUpload = ({
	image,
	api,
	setImages,
	setImageIDs,
	setValue
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

	const { requestData } = useSetImageURL({ file: image })

	useErrorSuccessToast({
		selector: { isSuccess, isError, message },
		displayTest: ready,
		errorID: "editerrimageupload",
		successID: `editsuc${uploadImageID || 'imageupload'}`,
		typeLabel: "Upload",
		reset: resetImages
	})

	const setImageStates = useCallback(() => {
		if(!!setImageIDs) {
			setImageIDs(prev => [
				...prev.filter(id => id !== uploadImageID),
				uploadImageID
			])
		}
		if (!!setValue) {
			setValue(prev => ({
				...prev,
				images: [
					...prev.images.filter(id => id !== uploadImageID),
					uploadImageID
				]
			}))
		}
		setImages(prev => prev.filter(item => item.path !== image.path))

	}, [setImageIDs, setValue, uploadImageID, setImages, image?.path])

	useEffect(() => {
		if (uploadImageID && ready) {
			setImageStates()
			let timer = setTimeout(() => {
				setReady(false)
			}, 1000)
			return () => clearTimeout(timer)
		}
	}, [setImageStates, ready, uploadImageID])

	const uploadImage = useCallback(() => {
		setReady(true)
		dispatch(uploadCloudinaryImage({
			api,
			reqData: requestData,
			setPercentage
		}))
	}, [api, dispatch, requestData])

	const handleSubmit = (e) => {
		e.preventDefault();
		uploadImage()
	};

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
