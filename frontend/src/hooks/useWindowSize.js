import { useState, useEffect, useCallback } from 'react';

const useWindowSize = () => { 

    const [ windowSize, setWindowSize ] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    
    const updateSize = useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, []);

    useEffect(() => (window.onresize = updateSize()), [updateSize]);
    
    return { windowSize };
};

export default useWindowSize;