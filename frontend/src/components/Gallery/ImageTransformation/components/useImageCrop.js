import { useCallback, useMemo, useState, useRef, useEffect } from 'react'
import { useDebounceEffect } from 'hooks';
import { useImageMethods } from ".";

const useImageCrop = ({
	setImageUpload,
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

	const [image, setImage] = useState({
		scale: 1,
		rotate: 0,
		ratioID: 'ratio_1_1',
		aspectRatio: 1 / 1,
		completedCrop: null,
		isDownloaded: false,
		imageFormat: 'image/jpeg'
	})

	const imageFormats = useMemo(() => [
		{ _id: 'image/jpeg', label: 'JPEG', ext: 'jpg' },
		{ _id: 'image/png', label: 'PNG', ext: 'png' },
		{ _id: 'image/webp', label: 'WEBP', ext: 'webp' },
	], [])

	const BASE = 40;

	const resetStates = useCallback(() => {
		!!setImageUpload && setImageUpload(false)
		setImgSrc('')
		previewRef.current = null
		imageRef.current = null
		setCrop(null)
		setImage({
			scale: 1,
			rotate: 0,
			ratioID: 'ratio_1_1',
			aspectRatio: 1 / 1,
			completedCrop: null,
			isDownloaded: false,
			imageFormat: 'image/jpeg'
		})
	}, [setCrop, setImgSrc, setImageUpload])

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			const ratioData = aspectRatios({ base: BASE }).find(_ => _._id === image.ratioID)
			setImage(prev => ({
				...prev,
				aspectRatio: ratioData.value
			}))
		}
		return () => mounted = false;
	}, [aspectRatios, image.ratioID]);

	useEffect(() => {
		if(image.isDownloaded) {
			let timer = setTimeout(() => {
				resetStates();
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [image.isDownloaded, resetStates])

	const onImageDownload = useCallback(() => {
		generateDownload({
			canvas: previewRef.current,
			crop: image.completedCrop,
			setIsDownloaded: (bool) => setImage(prev => ({ ...prev, isDownloaded: bool })),
			format: image.imageFormat,
			ext: imageFormats.find(_ => _._id === image.imageFormat)?.ext || 'jpeg'
		})
	}, [generateDownload, image.imageFormat, imageFormats, image.completedCrop])

	const debounceParams = useMemo(() => cropDebounceParams({
		completedCrop: image.completedCrop,
		previewRef,
		imageRef,
		scale: image.scale,
		rotate: image.rotate,
	}), [image.completedCrop, image.rotate, image.scale, cropDebounceParams])

	useDebounceEffect(debounceParams)

	return {
		setImage,
		image,
		imageProps: {
			aspectRatio: image.aspectRatio,
			imageRef,
			setCompletedCrop: (crop) => setImage(prev => ({ ...prev, completedCrop: crop }))
		},
		controlsProps: {
			aspectRatios,
			previewRef,
			ratioID: image.ratioID,
			setRatioID: (id) => setImage(prev => ({ ...prev, ratioID: id })),
			completedCrop: image.completedCrop,
			setScale: (scale) => setImage(prev => ({ ...prev, scale })),
			setRotate: (rotate) => setImage(prev => ({ ...prev, rotate })),
			onImageDownload,
			resetStates,
			imageFormat: image.imageFormat,
			imageFormats,
			setImageFormat: (format) => setImage(prev => ({ ...prev, imageFormat: format })),
			BASE
		},
		scale: image.scale,
		rotate: image.rotate,
	}
}

export default useImageCrop;
