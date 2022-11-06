import { Cloudinary } from "@cloudinary/url-gen";
import { useLoadAppData } from 'hooks';
import { createContext, useMemo, useState } from 'react';

const DataContext = createContext({
	isNavCollapsed: true,
	cloudinaryImage: {},
	screen: {}
});

export const DataProvider = (props) => {

	const cloudinaryImage = useMemo(() => {
		const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME;
		const cld = new Cloudinary({ cloud: { cloudName: CLOUDINARY_NAME } });
		return cld
	}, [])

	useLoadAppData();

	const [visibleElems, setVisibleElems] = useState({
		invoices: 'show'
	})

	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	return (
		<DataContext.Provider
			value={{
				isNavCollapsed,
				setIsNavCollapsed,
				setVisibleElems,
				cloudinaryImage,
				visibleElems
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataContext;
