import { useMemo } from "react";
import { useSelector } from "react-redux";

const useSelectorAlert = (collection, successMessage) => {

	const { isLoading, isError, message } = useSelector(state => state[collection])

	const selector = useMemo(() => ({
		isLoading,
		isError,
		errorMessage: message,
		successMessage
	}), [isLoading, isError, message, successMessage]);

	return { selector };

}

export default useSelectorAlert;
