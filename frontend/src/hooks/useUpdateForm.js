import { useContext, useCallback, useMemo, useState, useEffect } from 'react';
import { FormInputsContext } from 'contexts';
import { useSelector } from 'react-redux';
import { sliceData } from 'features';
import { inputSchemas } from 'state';
import { useSelectorAlert } from 'hooks';
import { Global } from 'globals/js';

const useUpdateForm = ({
	// initial display state for input fields
	initCheckedState,
	// collection name, used to get schema, update method, and label from sliceData
	collection,
	// current item to be updated
	currentItem,
	// Initial state for upDateData is empty object
	upDateData,
	setUpdateData,
	// For data meant for specific user. If true, schema state will be set to user
	userOnly = false
}) => {

	const [clear, setClear] = useState(false);
	const [entering, setEntering] = useState(false);

	// Input fields display state
	const [fieldsSelector, setFieldsSelector] = useState({
		fieldToClear: '',
		checkedFields: initCheckedState
	});

	// Get schema, update method, and label from sliceData
	const { schema, update, label, updateModalID } = useMemo(() =>
		sliceData.find(_ => _.id === collection), [collection]);

	// Set success message label for alert
	const messageLabel = useMemo(() => {
		if(!label) return 'Item has been successfully updated.';
		return `${Global.upperCaseFirst(label)} has been successfully updated.`;
	}, [label])

	const { selector } = useSelectorAlert(collection, messageLabel);

	// Clear form data and set entering state to false
	const clearForm = () => {
		setUpdateData({});
		setEntering(false);
		setClear(true);
	};

	// Get schema state for collection
	const { _id: userID } = useSelector(state => state.auth).user;
	const schemaState = userOnly
		// Set schema state to user if data meant to be viewed by user only
		? inputSchemas[schema](userID)
		: inputSchemas[schema];

	// Set update data to current item if it is not already set
	useEffect(() => {
		if (!upDateData?._id || upDateData?._id !== currentItem?._id) {
			setUpdateData(prev => ({
				...schemaState,
				...currentItem
			}));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentItem?._id, upDateData?._id])

	// Set clear state to false after 700ms
	useEffect(() => {
		if (clear) {
			let timeout = setTimeout(() => setClear(false), 700);
			return () => clearTimeout(timeout);
		}
	}, [clear])

	// Set data methods for form input event handlers
	const ctx = useContext(FormInputsContext);
	const setFlatData = ctx.setValue(setUpdateData);
	const setNestedData = ctx.setNestedObjectValue(setUpdateData);

	// Set first level property values
	const setValue = useCallback((field, value) => {
		setFlatData(field)(value);
		setEntering(true);
	}, [setFlatData, setEntering]);

	// Set tags property values
	const setTagsValue = useCallback((field) => {
		return (value) => {
			setValue(field, value);
		};
	}, [setValue])

	// Set nested level property values
	const setNestValue = useCallback((name) => (field) => (value) => {
		setNestedData(name)(field)(value);
		setEntering(true);
	}, [setNestedData, setEntering]);

	const setNestedFieldValue = useCallback((name) => (field, value) => {
		setNestValue(name)(field)(value);
	}, [setNestValue]);

	// Clear selected fields selectors to false upon success or cancel
	useEffect(() => {
		if (clear) {
			setFieldsSelector((_) => ({
				checkedFields: initCheckedState,
				fieldToClear: ''
			}));
		}
		return () => setClear(false)
	}, [clear, initCheckedState, setFieldsSelector]);

	const someChecked = useMemo(() => {
		const checkedArray = Object.entries(fieldsSelector.checkedFields).map(_ => _[1]);
		return checkedArray.some(_ => _ === true);
	}, [fieldsSelector.checkedFields]);

	useEffect(() => {
		if(!someChecked && entering === true) {
			setEntering(false)
		}
		// TODO: refactor this as I Only want to reset toggles on modal close. This was just a quick fix
		if(someChecked && entering === false) {
			setEntering(true)
		}
	}, [someChecked, entering])

	// Toggle checked input fields selector
	const setChecked = useCallback((field) => {
		const prevCheckedFieldState = fieldsSelector.checkedFields[field];
		setFieldsSelector((prev) => ({
			...prev,
			checkedFields: {
				...prev.checkedFields,
				[field]: !prev.checkedFields[field]
			}
		}));
		if (prevCheckedFieldState) {
			setFieldsSelector(prev => ({
				...prev,
				fieldToClear: field
			}))
		};
	}, [fieldsSelector.checkedFields, setFieldsSelector]);

	// Clear form field data if it's field selector is toggled off
	useEffect(() => {
		if (fieldsSelector.fieldToClear) {
			setUpdateData(prev => {
				const { [fieldsSelector.fieldToClear]: _, ...rest } = prev;
				return rest;
			})
			setFieldsSelector(prev => ({
				...prev,
				fieldToClear: ''
			}))
		}
	}, [fieldsSelector.fieldToClear, setUpdateData, setFieldsSelector]);

	return {
		clearForm,
		entering,
		setEntering,
		updateSlice: update,
		modalID: updateModalID,
		checkedFields: fieldsSelector.checkedFields,
		setChecked,
		setValue,
		setNestedFieldValue,
		setNestValue,
		setTagsValue,
		selector,
		clear
	};
}

export default useUpdateForm;
