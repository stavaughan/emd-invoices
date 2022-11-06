import { useCallback, useMemo, useState, useRef, useEffect } from 'react'
import { useDebounceEffect } from 'hooks';
import { useImageMethods } from ".";

const useImageCrop = ({
	setImageUpload,
	setImageID,
	setImgSrc,
	setCrop
}) => {

	const {
		aspectRatios,
		cropDebounceParams,
		generateDownload
	} = useImageMethods();

	const previewRef = useRef(null)
	const imageRef = useRef(null)

	const [scale, setScale] = useState(1)
	const [rotate, setRotate] = useState(0)
	const [ratioID, setRatioID] = useState('ratio_1_1')
	const [aspectRatio, setAspectRatio] = useState(1 / 1)
	const [completedCrop, setCompletedCrop] = useState({})

	const BASE = 40;

	const resetStates = useCallback(() => {
		!!setImageUpload && setImageUpload(false)
		setRatioID('ratio_1_1')
		setImgSrc('')
		previewRef.current = null
		imageRef.current = null
		setAspectRatio(1 / 1)
		setCrop()
		setCompletedCrop({})
		setScale(1)
		setRotate(0)
	}, [setCrop, setImgSrc, setImageUpload])

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			const ratioData = aspectRatios({ base: BASE }).find(_ => _._id === ratioID)
			setAspectRatio(ratioData.value)
		}
		return () => mounted = false;
	}, [ratioID, aspectRatios]);

	const onImageDownload = useCallback(() => setImageID
			? setImageID()
			: generateDownload(previewRef.current, completedCrop),
		[completedCrop, setImageID, generateDownload]
	)

	const debounceParams = useMemo(() => cropDebounceParams({
		completedCrop,
		previewRef,
		imageRef,
		scale,
		rotate
	}), [completedCrop, rotate, scale, cropDebounceParams])

	useDebounceEffect(debounceParams)

	return {
		aspectRatio,
		previewRef,
		imageRef,
		ratioID,
		setRatioID,
		completedCrop,
		setCompletedCrop,
		scale,
		setScale,
		rotate,
		setRotate,
		onImageDownload,
		resetStates,
		BASE
	}
}

export default useImageCrop;
