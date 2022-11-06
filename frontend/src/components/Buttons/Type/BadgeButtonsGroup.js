import { Button } from '..';
import { Global } from 'globals/js'
import clsx from 'clsx';

const BadgeButtonsGroup = ({
	type,
	setType,
	className,
	clickHandler,
	label1,
	label2
}) => {

    const onClickHandler1 = (e) => {
		e.preventDefault();
        setType(label1)
        if (clickHandler) {
            clickHandler(label1)
        }
    }

    const onClickHandler2 = (e) => {
		e.preventDefault();
        setType(label2)
        if (clickHandler) {
            clickHandler(label2)
        }
    }

    return (
        <div className={clsx(
			'btn-group d-print-none',
			className
		)} role="group">
            <Button
                type="button"
                className={clsx(
					'btn-sm btn-outline-primary',
					type === label1 && 'active'
				)}
                rest={{ onClick: onClickHandler1 }}
            >
                {Global.upperCaseFirst(label1)}
            </Button>
            <Button
                type="button"
                className={clsx(
					'btn-sm btn-outline-primary',
					type === label2 && 'active'
				)}
                rest={{ onClick: onClickHandler2 }}
            >
                {Global.upperCaseFirst(label2)}
            </Button>
        </div>
    );
};

export default BadgeButtonsGroup;
