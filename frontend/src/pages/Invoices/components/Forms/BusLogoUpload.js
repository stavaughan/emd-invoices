import { useCallback } from 'react';
import { InputCol } from 'components/Forms/components';
import { useSelector } from 'react-redux';

const BusLogoUpload = ({ setNewBusiness }) => {

	const selector = useSelector((state) => state.images);

	const updateImage = useCallback(() => {
		setNewBusiness(prev => ({
			...prev,
			logoID: selector?.uploadImageID
		}))
	}, [selector?.uploadImageID, setNewBusiness]);

	const imageID = selector?.uploadImageID || '';

	return (
		<InputCol.ImageUpload
			cols="12 sm-6"
			id="newbusinesslogo"
			dataID="new"
			apiPath="logos"
			dataPath="app-images"
			imageID={imageID}
			toastID="buslogo"
			selector={selector}
			collection="businesses"
			updateImage={updateImage}
			width={150}
			label="Logo"
		/>
	)
}

export default BusLogoUpload
