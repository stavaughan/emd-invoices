import { useMemo } from 'react';
import { ListGroupWrapper } from 'components/Lists';
import { useToggleMethods } from 'components/Blocks/ToggleSettings';
import { ToggleItem } from '.';

const ToggleList = ({ toggleData, setToggles, storageKey, toggles }) => {

	const { toggleStates } = useToggleMethods();

    const toggleItems = useMemo(() => {
		return toggleStates(toggleData, toggles)
	}, [toggleData, toggles, toggleStates]);

    return (
        <ListGroupWrapper type="flush" className="mt-3">
            {toggleItems.map((item, idx) => (
                <ToggleItem
                    key={item._id}
					idx={idx}
					last={toggleItems.length - 1}
                    item={item}
                    setToggles={setToggles}
                    storageKey={storageKey}
                    toggles={toggles}
                />
            ))}
        </ListGroupWrapper>
    )
}

export default ToggleList
