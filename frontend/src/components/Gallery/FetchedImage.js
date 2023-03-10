import React, { useContext, useMemo } from 'react';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { DataContext } from 'contexts';

const FetchedImage = ({ pid, width, height, className }) => {

	const { cloudImage } = useContext(DataContext)

	const image = useMemo(() => cloudImage(pid), [cloudImage, pid])

	return (
		<AdvancedImage
			{...width && { width }}
			{...height && { height }}
			cldImg={image}
			plugins={[lazyload({ rootMargin: '10px 20px 10px 30px' })]}
			{...className && { className }}
		/>
	)
};

export default FetchedImage
