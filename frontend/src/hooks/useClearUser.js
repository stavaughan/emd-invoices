import { useEffect, useState } from "react";
import { featuresLogic } from "features";

const useClearUser = () => {

	const [clear, setClear] = useState(false)

    useEffect(() => {
        if (clear) {
            featuresLogic.resetUserStorage();
        }
		return () => setClear(false)
    }, [clear, setClear])

	return { setClear }
}

export default useClearUser;
