import { useCallback } from 'react';
import { centerCrop, makeAspectCrop } from 'react-image-crop'

const useImageMethods = () => {

	const canvasPreview = useCallback(({
		image,
		canvas,
		crop,
		scale = 1,
		rotate = 0
	}) => {

		const TO_RADIANS = Math.PI / 180

		const ctx = canvas.getContext('2d')

		if (!ctx) {
			throw new Error('No 2d context')
		}

		const scaleX = image.naturalWidth / image.width
		const scaleY = image.naturalHeight / image.height
		// devicePixelRatio slightly increases sharpness on retina devices
		// at the expense of slightly slower render times and needing to
		// size the image back down if you want to download/upload and be
		// true to the images natural size.
		const pixelRatio = window.devicePixelRatio || 1
		// const pixelRatio = 1

		canvas.width = Math.floor(crop.width * scaleX * pixelRatio)
		canvas.height = Math.floor(crop.height * scaleY * pixelRatio)

		ctx.scale(pixelRatio, pixelRatio)
		ctx.imageSmoothingQuality = 'high'

		const cropX = crop.x * scaleX
		const cropY = crop.y * scaleY

		const rotateRads = rotate * TO_RADIANS
		const centerX = image.naturalWidth / 2
		const centerY = image.naturalHeight / 2

		ctx.save()

		// 5 - Move the crop origin to the canvas origin (0,0)
		ctx.translate(-cropX, -cropY)
		// 4 - Move the origin to the center of the original position
		ctx.translate(centerX, centerY)
		// 3 - Rotate around the origin
		ctx.rotate(rotateRads)
		// 2 - Scale the image
		ctx.scale(scale, scale)
		// 1 - Move the center of the image to the origin (0,0)
		ctx.translate(-centerX, -centerY)
		ctx.drawImage(
			image,
			0,
			0,
			image.naturalWidth,
			image.naturalHeight,
			0,
			0,
			image.naturalWidth,
			image.naturalHeight,
		)
		ctx.restore()
	}, []);

	const onSelectImage = useCallback((setCrop, setImgSrc, file) => {
		setCrop(undefined)
		const reader = new FileReader()
		reader.addEventListener('load', () => setImgSrc(reader.result.toString() || ''))
		reader.readAsDataURL(file)
	}, []);

	const onLoadImage = useCallback(({ currentTarget, imageRef, aspectRatio, setCrop }) => {
		imageRef.current = currentTarget
		const { width, height } = currentTarget
		const crop = centerCrop(
			makeAspectCrop({ unit: '%', width: 70 }, aspectRatio, width, height),
			width,
			height
		)
		setCrop(crop)
	}, []);

	const cropDebounceParams = useCallback(({
		completedCrop,
		previewRef,
		imageRef,
		scale,
		rotate
	}) => ({
		fn: async () => {
			if (completedCrop?.width && completedCrop?.height && imageRef.current && previewRef.current) {
				canvasPreview({
					image: imageRef.current,
					canvas: previewRef.current,
					crop: completedCrop,
					scale,
					rotate
				})
			}
		},
		waitTime: 100,
		deps: [completedCrop, scale, rotate]
	}), [canvasPreview]);

	const generateDownload = useCallback((canvas, crop) => {
		const imageToBlob = (blob) => {
			const previewUrl = window.URL.createObjectURL(blob);
			const anchor = document.createElement('a');
			anchor.download = `croppedImage.jpg`;
			anchor.href = URL.createObjectURL(blob);
			anchor.click();
			window.URL.revokeObjectURL(previewUrl);
		};
		return crop && !!canvas ? canvas.toBlob(imageToBlob, 'image/jpeg', 1) : null;
	}, []);

	const aspectRatios = useCallback(({ base }) => ([
		{
			_id: 'ratio_1_1',
			label: '1:1 square',
			width: base,
			height: base,
			value: 1 / 1
		},
		{
			_id: 'ratio_5_4',
			label: '5:4 landscape',
			height: base,
			width: base * 5 / 4,
			value: 5 / 4
		},
		{
			_id: 'ratio_4_5',
			label: '4:5 portrait',
			width: base,
			height: base * 5 / 4,
			value: 4 / 5
		},
		{
			_id: 'ratio_3_2',
			label: '3:2 landscape',
			height: base,
			width: base * 3 / 2,
			value: 3 / 2
		},
		{
			_id: 'ratio_2_3',
			label: '2:3 portrait',
			width: base,
			height: base * 3 / 2,
			value: 2 / 3
		},
		{
			_id: 'ratio_16_9',
			label: '16:9 landscape',
			height: base,
			width: base * 16 / 9,
			value: 16 / 9
		},
		{
			_id: 'ratio_9_16',
			label: '9:16 portrait',
			width: base,
			height: base * 16 / 9,
			value: 9 / 16
		}
	]), []);

	return {
		aspectRatios,
		cropDebounceParams,
		generateDownload,
		onLoadImage,
		onSelectImage
	}
}

export default useImageMethods;
