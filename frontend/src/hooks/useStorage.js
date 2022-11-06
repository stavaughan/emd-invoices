import { useState, useEffect, useCallback } from 'react'

const useStorage = ({ type, dataKey }) => {

    const [storedData, setStoredData] = useState({});

    const storageData = useCallback(() => {
        switch(true) {
            case type === 'session':
                return sessionStorage.getItem(dataKey)
            case type === 'local':
                return localStorage.getItem(dataKey)
            default: {
                const storedLocal = localStorage.getItem(dataKey);
                const storedSession = sessionStorage.getItem(dataKey);
                return storedLocal || storedSession;
            }
        }
    }, [dataKey, type])

    const getParsedData = useCallback(() => {

        const dataStr = storageData();
        const data = dataStr ? JSON.parse(dataStr) : null;

        if (data) {
            setStoredData(data)
        }
    }, [storageData])

    useEffect(() => {
        let subsribed = true;
        if (subsribed) {
            getParsedData()
        }
        return () => {
            subsribed = false;
        }
    }, [getParsedData])

    return { storedData }
}

export default useStorage
