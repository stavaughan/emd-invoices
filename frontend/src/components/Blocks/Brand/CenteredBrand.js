import React from "react";
import { useContext } from 'react';
import { useSelector } from 'react-redux'
import { BrandComponent } from 'components/Blocks';
import { SettingsContext } from 'contexts';
import clsx from "clsx";

import Classes from './BrandComponent.module.css';

const CenteredBrand = ({ loading }) => {

	const { isSmall } = useContext(SettingsContext).screen;
	const { settings } = useSelector(state => state.settings);

	const developer = settings?.developer;

	return (
		<div className={clsx(
			"d-flex justify-content-center py-3",
			Classes["emd-brand-login--logo"]
		)}
		>
			<BrandComponent
				baseName={developer?.name}
				subName={developer?.subName}
				isLoading={loading}
				small={isSmall}
				color
			/>
		</div>
	)
}

export default CenteredBrand
