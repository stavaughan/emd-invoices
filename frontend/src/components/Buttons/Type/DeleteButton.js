import { Button } from 'components/Buttons';
import clsx from 'clsx';

const DeleteButton = ({ deleteButtonHandler, small }) => {

    return (
        <Button
            type="button"
            className={clsx(
				"btn-close btn-text-primary fw-bolder shadow-sm rounded-circle",
				small && 'text-sm',
			)}
			rest={{
				onClick: deleteButtonHandler,
				'aria-label': 'Delete'
			}}
        />
    );
};

export default DeleteButton;
