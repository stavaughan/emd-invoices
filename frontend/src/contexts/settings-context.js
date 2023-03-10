import React, { createContext } from 'react';
import { useScreenWidth, useScrollLock, useFontSize } from 'hooks';

const SettingsContext = createContext({
    screen: {},
	windowWidth: 0,
	breakPointWidth: {},
	lockScroll: () => {},
	unlockScroll: () => {},
	fontSize: {}
});

export const SettingsContextProvider = (props) => {

	const { screen, windowWidth, breakPointWidth } = useScreenWidth();

	const fontSize = useFontSize({ isXSmall: screen.isXSmall });
	const { lockScroll, unlockScroll } = useScrollLock();

    return (
        <SettingsContext.Provider
            value={{
				screen,
				fontSize,
				unlockScroll,
				windowWidth,
				breakPointWidth,
				lockScroll
            }}
        >
            {props.children}
        </SettingsContext.Provider>
    );
};

export default SettingsContext;
