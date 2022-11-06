import { Svg } from 'components/SVGs';
import React, { useState, useEffect, useCallback } from 'react';
import Classes from './BackToTop.module.css';

const BackToTop = () => {

    const [visible, setVisible] = useState(false);

    const onScroll = useCallback(() => {
        const isVisible = document.documentElement.scrollTop > 20;
        setVisible(isVisible);
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", onScroll);
        return () => document.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    const scrollToTop = () => {
        if (visible) {
			window.scrollTo({ top: 0 })
		};
    }

    return (
        <>
            {visible && (
                <div
                    className={Classes['scrolltop']}
                    onClick={scrollToTop}
                >
                    <span className={Classes['svg-icon']}>
                        <Svg>
                            <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black"></rect>
                            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black"></path>
                        </Svg>
                    </span>
                </div>
            )}
        </>
    );
};

export default BackToTop;