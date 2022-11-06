import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { AccessDeniedIcon } from 'globals/img'
import { AlertPage } from 'Layout';

const Unauthorized = () => {

    const navigate = useNavigate();

	useEffect(() => {
		window.onbeforeunload = () => {
			navigate('/')
		};
		return () => {
			window.onbeforeunload = null;
		}
	}, [navigate]);

    return (
        <AlertPage
            title="Unauthorized Access."
            label="Go Back"
            BackGroundSVG={AccessDeniedIcon}
            onClickHandler={() => navigate('/')}
        />
    )
}

export default Unauthorized
