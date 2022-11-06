import { createContext, useCallback, useState, useEffect } from 'react';

const FormInputsContext = createContext({
	setNestedValue: () => { },
	setNestValues: () => { },
	setNestValue: () => { },
	setValues: () => { },
	setValue: () => { },
	formPageID: '',
});

export const FormInputsProvider = ({ pageID, children }) => {

	const [formPageID, setFormPageID] = useState(pageID);
	useEffect(() => { setFormPageID(pageID) }, [pageID])

	/**
	 * Use this to update many fields nested in an object within an item
	 *
	 */
	const setNestedProps = useCallback((setState, name) => {
		return (props) => setState(prev => ({
			...prev,
			[name]: {
				...prev[name],
				...props
			}
		}))
	}, []);

	/**
	 * Use this to update a single field nested in an object within an item
	 *
	 */
	const setNestedValue = useCallback((setState, name) => {
		return (field, value) => setState(prev => ({
			...prev,
			[name]: {
				...prev[name],
				[field]: value
			}
		}))
	}, []);

	/**
	 * Use this to update a single non-nested field within an item
	 *
	 */
	const setObjectValue = useCallback((setState, field, other = {}) => {
		return (value) => setState(prev => ({ ...prev, [field]: value, ...other }))
	}, []);

	/**
	 * Curried version of setNestedProps
	 * Use this to update many fields nested in an object within an item
	 *
	 */
	const setNestValues = useCallback((setState) => (name) => setNestedProps(setState, name), [setNestedProps]);

	/**
	 * Curried version of setNestedValue
	 * Use this to update a single field nested in an object within an item
	 *
	 */
	const setNestValue = useCallback((setState) => (name) => setNestedValue(setState, name), [setNestedValue]);

	/**
	 * Use this to update many non-nested fields within an item
	 *
	 */
	const setValues = useCallback((setState) => {
		return (props) => setState(prev => ({ ...prev, ...props }))
	}, []);

	/**
	 * Curried version of setObjectValue
	 * Use this to update a single non-nested field within an item
	 *
	 */
	const setValue = useCallback((setState) => (key, other) => setObjectValue(setState, key, other), [setObjectValue]);

	return (
		<FormInputsContext.Provider value={{
			setNestedValue,
			setNestValues,
			setNestValue,
			setValues,
			setValue,
			setFormPageID,
			formPageID
		}}>
			{children}
		</FormInputsContext.Provider>
	);
};

export default FormInputsContext;
