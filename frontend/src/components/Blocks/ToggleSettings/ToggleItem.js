import { useCallback, useContext } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import { ListItemContainer } from 'components/Lists';
import { useToggleMethods } from '.';
import { Input } from 'components/Forms/Inputs';
import { SettingsContext } from 'contexts';
import clsx from 'clsx';

const ToggleItem = ({
	item,
	setToggles,
	storageKey,
	toggles,
	idx,
	last
}) => {

	const { setToggle } = useToggleMethods();

	const { isXSmall } = useContext(SettingsContext).screen

    const setNewState = useCallback((checked) => {
        setToggle({ setToggles, toggleKey: item._id, storageKey, toggles, checked })
    }, [setToggles, storageKey, item._id, toggles, setToggle]);

	const activeIcon = <CheckCircleIcon className="h-5 w-5 text-success me-2" aria-hidden="true" />;
	const inactiveIcon = <XCircleIcon className="h-5 w-5 text-gray-300 me-2" aria-hidden="true" />;

    return (
        <ListItemContainer
            key={item._id}
            className="px-0"
			border={idx !== last}
        >
			<div className="font-normal d-flex align-items-center">
				{item.checkedState ? activeIcon : inactiveIcon}
				<span className={clsx(
					isXSmall && 'text-sm',
					"text-dark"
					)}>
					{item.label}
				</span>
			</div>
			<Input.Toggle
				id={item._id}
				setToggle={setNewState}
				toggle={item.checkedState}
			/>
        </ListItemContainer>
    )
}

export default ToggleItem
