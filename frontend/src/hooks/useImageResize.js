import { useEffect, useCallback, useState } from 'react';
import { toast } from "react-toastify";

const useImageResize = ({ file, width }) => {

	const [requestData, setRequestData] = useState({});

    const compressImage = useCallback(() => {

        if (!file?.name) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {

            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;

            imgElement.onload = (e) => {

                const canvas = document.createElement('canvas');
                const MAX_WIDTH = width > e.target.width ? e.target.width : width;
                const scaleSize = MAX_WIDTH / e.target.width;

                canvas.width = MAX_WIDTH;
                canvas.height = e.target.height * scaleSize;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

                const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imgData.data;
                for(let i = 0; i < data.length; i += 4){
                    if(data[i + 3] < 255){
                        data[i] = 255;
                        data[i + 1] = 255;
                        data[i + 2] = 255;
                        data[i + 3] = 255;
                    }
                }
                ctx.putImageData(imgData, 0, 0);

                const srcEncoded = ctx.canvas.toDataURL('image/jpeg', 1);

				setRequestData({
					url: srcEncoded,
					name: file.name.split('.')[0],
					size: file.size
				})
            }
        };
		reader.onerror = () => {
			toast.error('something went wrong!');
        };
    }, [file, width]);

    useEffect(() => {
        let mounted = true;
        const identifier = setTimeout(() => {
            if(mounted) compressImage()
        }, 1000);
        return () => {
            clearTimeout(identifier);
            mounted = false;
        };

    }, [compressImage]);

	return { requestData, setRequestData }
};

export default useImageResize;
