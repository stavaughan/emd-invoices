import { ModalButton } from '..';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const AddTaskButton = ({ modalID, label }) => {

	const { isXSmall } = useMobile();

    return (
        <div className="text-center">
            <ModalButton
                className={clsx(
					isXSmall ? 'btn-sm' : 'text-sm',
					'link-hover',
				)}
                modalID={modalID}
            >
                + {label}
            </ModalButton>
        </div>
    );
};

export default AddTaskButton;
