import { LoaderElem } from 'components/Buttons/components';
import { Button } from 'components/Buttons';
import clsx from 'clsx';

import Classes from '../styles/userRegistration.module.css';

const LoginButton = ({
	btnID,
	className,
	disabled,
	onClick,
	label,
	loading
}) => {

    const onClickHandler = (e) => {
        if(onClick) onClick(e);
    };

    return (
        <Button
            className={clsx(Classes['login-btn'], 'rounded-3', className)}
            type="submit"
			rest={{
				id: btnID,
				...disabled || loading ? { disabled } : {},
				onClick: onClickHandler
			}}
        >
            {loading ? <LoaderElem className="text-muted" /> : label}
        </Button>
    );
};

export default LoginButton;
