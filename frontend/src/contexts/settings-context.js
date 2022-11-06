import React, { createContext } from 'react';
import { useScreenWidth, useScrollLock, useFontSize } from 'hooks';

const SettingsContext = createContext({
    screen: {},
	lockScroll: () => {},
	unlockScroll: () => {},
	fontSize: {}
});

export const SettingsContextProvider = (props) => {

	const { screen } = useScreenWidth();

	const fontSize = useFontSize({ isXSmall: screen.isXSmall });
	const { lockScroll, unlockScroll } = useScrollLock();

    return (
        <SettingsContext.Provider
            value={{
				screen,
				fontSize,
				unlockScroll,
				lockScroll
            }}
        >
            {props.children}
        </SettingsContext.Provider>
    );
};

export default SettingsContext;
