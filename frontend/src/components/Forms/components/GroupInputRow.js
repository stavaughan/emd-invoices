import { Col, Row } from 'components/HTML';
import { themeClasses } from 'theme';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const GroupInputRow = ({ label, subLabel, labelClass, rowClass, children }) => {

	const { isXSmall } = useMobile();

    const { inputGroups } = themeClasses.forms;
	const themeLabel = inputGroups.label.group;

    return (
        <Row className={rowClass || inputGroups.row}>
            <Col cols="12" className={labelClass || themeLabel(isXSmall)}>
				{label}
				{subLabel && (
				<div className={clsx(
					isXSmall ? 'text-xs' : 'text-sm',
					"text-gray-400"
				)}>
					{subLabel}
				</div>
			)}
			</Col>
            {children}
        </Row>
    )
};

export default GroupInputRow
