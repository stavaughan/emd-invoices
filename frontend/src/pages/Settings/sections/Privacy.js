import { useState, useMemo } from 'react';
import { ToggleSettings } from 'components/Blocks';
import { InputCol } from 'components/Forms/components';
import { TitleDescription } from 'components/Blocks';
import { useToggleMethods } from 'components/Blocks/ToggleSettings';
import { Row, Col } from 'components/HTML';
import { SiteData } from 'data';

const Privacy = () => {

    const { profileOptions, notifications, display } = SiteData.userSettings;

	const {
		storedDisplayProfile,
		initialState,
		profileDisplayDescription
	} = useToggleMethods();

	const privacyToggles = useMemo(() => {
        return initialState(notifications.privacy.settings, notifications.privacy._id)
    }, [
		notifications.privacy.settings,
		notifications.privacy._id,
		initialState
	]);

    const [displayed, setDisplayed] = useState(storedDisplayProfile);
	const [toggles, setToggles] = useState(privacyToggles);

    const description = useMemo(() => profileDisplayDescription(displayed), [displayed, profileDisplayDescription]);

	const onSetDisplay = (value) => {
		setDisplayed(value);
		localStorage.setItem(display, value);
	}

    return (
        <div className="ease-in-out">
            <Row className="row d-lg-flex justify-content-between align-items-center">
                <Col cols="12 md-8 lg-9" className="mb-3 mb-lg-0">
                    <TitleDescription
                        title="Profile Display"
                        description={description}
                    />
                </Col>
				<InputCol.Dropdown
					cols="6 md-4 lg-3"
					id="profile-display"
					selected={displayed}
					onChange={onSetDisplay}
					optionData={profileOptions}
				/>
            </Row>
            <hr className="my-4" />
            <Row>
                <Col cols="12">
                    <ToggleSettings
                        toggles={toggles}
                        setToggles={setToggles}
                        settingsData={notifications.privacy}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Privacy
