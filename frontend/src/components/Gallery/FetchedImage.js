import React, { useContext } from 'react';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { DataContext } from 'contexts';

const FetchedImage = ({ pid, width, height }) => {

	const { cloudinaryImage } = useContext(DataContext)

    return (
        <AdvancedImage
            {...width && { width }}
            {...height && { height }}
            cldImg={cloudinaryImage.image(pid)}
			plugins={[lazyload({ rootMargin: '10px 20px 10px 30px' })]}
        />
    )
};

export default FetchedImage
