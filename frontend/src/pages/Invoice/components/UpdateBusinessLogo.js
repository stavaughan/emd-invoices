import { useCallback } from 'react';
import { getBusinesses } from 'features/invoices/businessesSlice';
import { UploadImageContainer } from 'components/Upload/ImageUpload';
import { resetImages, uploadBusinessLogo } from 'features/images/imagesSlice';
import { useDispatch, useSelector } from 'react-redux'

const UpdateBusinessLogo = ({ business, width, displayWidth, children }) => {

	const dispatch = useDispatch()
	const selector = useSelector(state => state.images)
	const updateLogo = useCallback(() => dispatch(getBusinesses()), [dispatch])
	const imageID = business?.logoID || '';

	return (
		<UploadImageContainer
			ids={{
				contact: business?._id,
				toast: imageID,
				pid: imageID ? `app-images/${imageID}` : '',
				idType: "business"
			}}
			selector={selector}
			collection="businesses"
			updateImage={updateLogo}
			uploadSlice={uploadBusinessLogo}
			uploadImageID={selector?.businessImageID}
			resetSlice={resetImages}
			displayWidth={displayWidth}
			width={width}
			apiPath="logos"
			idType="business"
			type="logo"
			camera
		>
			{children}
		</UploadImageContainer>
	)
}

export default UpdateBusinessLogo
