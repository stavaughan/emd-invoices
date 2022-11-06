import { Card, CardBody, CardHeader } from 'components/Card';
import { DeleteButton } from 'components/Buttons/Type';
import clsx from 'clsx';

const InputGroup = ({ deleteHandler, groupTitle, className, display, children }) => {

    return (
        <Card className={clsx("shadow-none", display || 'show')}>
            <CardHeader
                titleClass={className || 'text-dark'}
                title={groupTitle}
            >
                {deleteHandler && <DeleteButton deleteButtonHandler={deleteHandler} />}
            </CardHeader>
            <CardBody children={children} />
        </Card>
    );
};

export default InputGroup;
