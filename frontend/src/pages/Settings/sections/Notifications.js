import { useMemo, useState } from 'react';
import { Row, Col } from 'components/HTML';
import { ToggleSettings } from 'components/Blocks';
import { useToggleMethods } from 'components/Blocks/ToggleSettings';
import { SiteData } from 'data';

const Notifications = () => {

	const { initialState  } = useToggleMethods();

    const notifications = SiteData.userSettings.notifications
    const { security, news } = notifications;

    const initialSecurity = useMemo(() => {
        return initialState(security.settings, security._id)
    }, [security.settings, security._id, initialState]);

    const initialNews = useMemo(() => {
        return initialState(news.settings, news._id)
    }, [news.settings, news._id, initialState]);

    const [secToggles, setSecToggles] = useState(initialSecurity);
    const [newsToggles, setNewsToggles] = useState(initialNews);

    return (
        <div className="ease-in-out">
            <Row>
                <Col cols="12">
                    <ToggleSettings
                        toggles={secToggles}
                        setToggles={setSecToggles}
                        settingsData={security}
                    />
                </Col>
            </Row>
            <hr className="my-4" />
            <Row>
                <Col cols="12">
                    <ToggleSettings
                        toggles={newsToggles}
                        setToggles={setNewsToggles}
                        settingsData={news}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Notifications
