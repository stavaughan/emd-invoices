import { useMemo, useCallback } from 'react';
import { SiteData } from 'data';

const useToggleMethods = () => {

	const { profileOptions, display } = SiteData.userSettings;

	const storedDisplayProfile = useMemo(() => {
		const localValue = localStorage.getItem(display);
		return localValue || profileOptions[0]._id;
	}, [profileOptions, display]);

	const profileDisplayDescription = useCallback((displayed) => {
		const contraOption = profileOptions.find(_ => _._id !== displayed)._id;
		return (
			<>
				Your profile is set as <span className="badge rounded-pill bg-primary">{displayed}</span>. Change it to <span className="badge rounded-pill bg-primary-soft">{contraOption}</span>?
			</>
		);
	}, [profileOptions]);

    const initialState = useCallback((settings, storageKey, type) => {
        const defaultStates = settings.map(setting => ({
            _id: setting._id,
            checkedState: setting?.checkedState
        }))
        const storage = type ? sessionStorage : localStorage;
        const storedState = storage.getItem(storageKey);
        return storedState ? JSON.parse(storedState) : defaultStates;
    }, []);

    const allTogglesOff = useCallback((states) => {
        const checkedStates = states?.length ? states.map(_ => _.checkedState) : [];
        return checkedStates.every(state => !state);
    }, []);

    const resetToggles = useCallback((prev) => prev.map(_ => ({
        _id: _._id,
        checkedState: false
    })), []);

    const toggleStates = useCallback((toggleData, toggles) => {
        return toggleData.map(item => ({
            ...item,
            checkedState: toggles?.length ? toggles.filter(_ => _._id === item._id)[0].checkedState : []
        }))
    }, []);

    const toggleUpdate = useCallback((prev, toggleKey, checked) => {
        return prev.map(_ => ({
            ..._,
            checkedState: _._id === toggleKey
                ? checked
                : _.checkedState
        }))
    }, []);

    const setToggle = useCallback(({ setToggles, toggleKey, storageKey, toggles, checked, type }) => {

        const storage = type ? sessionStorage : localStorage;

        const update = (prev) => toggleUpdate(prev, toggleKey, checked);
        setToggles(update);
        storage.setItem(storageKey, JSON.stringify(update(toggles)));
    }, [toggleUpdate]);

	return {
		storedDisplayProfile,
		profileDisplayDescription,
		initialState,
		allTogglesOff,
		resetToggles,
		toggleStates,
		toggleUpdate,
		setToggle
	}
}

export default useToggleMethods
