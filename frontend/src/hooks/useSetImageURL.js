import { useState, useCallback, useEffect } from 'react';
import { toast } from "react-toastify";

const useSetImageURL = ({ file }) => {

    const [requestData, setRequestData] = useState({});

    const setDataURL = useCallback(() => {

        if (!file?.name) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setRequestData({
                url: reader.result,
                name: file.name.split('.')[0],
                size: file.size
            })
        };
        reader.onerror = () => {
			toast.error('something went wrong!');
        };
    }, [file]);

    useEffect(() => {
        let mounted = true;
        if(mounted) {
            setDataURL()
        }
        return () => mounted = false;
    }, [setDataURL])

    return { requestData, setRequestData }

}

export default useSetImageURL
