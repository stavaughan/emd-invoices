import { useEffect } from 'react';

const useClear = (clear, ...fns) => {

	useEffect(() => {
		if(clear){
			fns.forEach(fn => fn())
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clear]);
}

export default useClear;
