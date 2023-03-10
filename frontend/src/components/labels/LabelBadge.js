import { Badge } from '.';
import clsx from 'clsx';

const LabelBadge = ({ margin, label }) => {

    return (
        <span className={clsx(margin || 'me-0', 'text-light')}>
            <Badge color='light' label={label} />
        </span>
    );
};

export default LabelBadge;
