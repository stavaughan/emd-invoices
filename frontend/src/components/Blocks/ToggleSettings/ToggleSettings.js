import { useState, useMemo } from 'react';
import { ToggleList, DisableToggles } from '.';
import { TitleDescription } from '..';
import { useToggleMethods } from '.';

const ToggleSettings = ({ toggles, setToggles, settingsData }) => {

	const { allTogglesOff } = useToggleMethods();

    const [loading, setLoading] = useState(false);

    const allFalse = useMemo(() => allTogglesOff(toggles), [toggles, allTogglesOff]);
	const toggleTitle = settingsData.title.toLowerCase()

    return (
        <>
            <div className="mb-3">
                <TitleDescription
                    title={settingsData.title}
                    description={settingsData.description}
                />
                <ToggleList
                    toggleData={settingsData.settings}
                    storageKey={settingsData._id}
                    setToggles={setToggles}
                    toggles={toggles}
                />
            </div>
            <DisableToggles
                allFalse={allFalse}
                storageKey={settingsData._id}
                setToggles={setToggles}
                loading={loading}
                setLoading={setLoading}
                toggles={toggles}
                message={`Your ${toggleTitle} settings will be reset to their default states.`}
                label={`Disable ${toggleTitle} settings`}
            />
        </>
    );
};

export default ToggleSettings;
