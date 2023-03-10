import { ToolTip } from 'components/ToolTip';
import { ModalButton } from 'components/Buttons';
import { useMobile } from 'hooks';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const AddDataModalLaunch = ({ onClick, tip, modalID, label, className, color }) => {

	const { isXSmall } = useMobile();

	const onClickHandler = (e) => {
		e.preventDefault();
		!!onClick && onClick()
	}

	return (
		<span className={clsx('relative', className)}>
			<ToolTip tip={tip} span>
				<ModalButton
					className={clsx(
						isXSmall ? 'px-1 py-1' : 'px-2 py-1',
						`d-inline-flex fw-semibold text-${color} bg-${color}-soft bg-opacity-10 border border-${color}-soft rounded-pill text-xs`
					)}
					modalID={modalID}
					rest={{ onClick: onClickHandler }}
				>
					{!isXSmall ? label : <FAIcon icon="plus" />}
				</ModalButton>
			</ToolTip>
		</span>
	)
}

export default AddDataModalLaunch
