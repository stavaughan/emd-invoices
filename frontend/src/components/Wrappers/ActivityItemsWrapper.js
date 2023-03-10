import { Row } from 'components/HTML';
import { AddTaskButton } from 'components/Buttons/Type';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const ActivityItemsWrapper = ({ title, modalID, type, children }) => {

	const { isXSmall } = useMobile();

    return (
        <div className="ms-2">
            <div className={clsx(
				'text-dark py-2 ',
				isXSmall && 'text-sm'
			)}>
                {title}
            </div>
            <Row className="mb-3">
                {children}
            </Row>
            <Row className="mb-4">
                <AddTaskButton modalID={modalID} label={`Add new ${type}`} />
            </Row>
        </div>
    );
};

export default ActivityItemsWrapper;
