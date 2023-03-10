import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CenteredBrand } from 'components/Blocks/Brand';
import { AlertPage } from 'Layout';
import { NotFoundSVG } from 'globals/img';
import { SettingsContext } from 'contexts';
import { useLoading } from 'hooks';
import clsx from 'clsx';

const NotFound = () => {

	const navigate = useNavigate();

	const { isSmall } = useContext(SettingsContext).screen;
	const { loading } = useLoading();

	const onClickHandler = (e) => {
		e.preventDefault()
		navigate('/', { replace: true })
	};

	return (
		<AlertPage
			h1={true}
			title="404 Page Not Found"
			label="Return Home"
			BackGroundSVG={NotFoundSVG}
			BrandBlock={(
				<div className={clsx('container position-relative', isSmall && 'mt-2')}>
					<CenteredBrand loading={loading} />
				</div>
			)}
			onClickHandler={onClickHandler}
		/>
	);
};

export default NotFound;
