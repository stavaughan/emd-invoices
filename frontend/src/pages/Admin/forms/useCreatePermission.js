import { useCallback, useMemo, useEffect, useContext, useState } from 'react';
import { createUserPermission } from 'features/users/userPermissionsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FormInputsContext } from 'contexts';
import { inputSchemas } from 'state';
import { toast } from 'react-toastify';

const useCreatePermission = ({ clear, rolePermissions, setValue }) => {

	const [newPermission, setNewPermission] = useState(inputSchemas.userPermission);
	const [ready, setReady] = useState(false);

	const dispatch = useDispatch()

	const ctx = useContext(FormInputsContext);
	const setPermissionValue = ctx.setValues(setNewPermission);

	const {
		userPermissions,
		isLoading,
		isSuccess,
	} = useSelector(state => state.userPermissions);

	const dropdownOptions = useMemo(() => {
		if (!userPermissions?.length) return [];
		return userPermissions.map(_ => ({ value: _.pid, label: _?.label }));
	}, [userPermissions]);

	const setPermissionValues = useCallback((setState, value) => {
		const label = value.trim();
		const pid = label.replace(/\s/g, '').toLowerCase();
		setState('pid')(pid);
		setState('label')(label);
	}, []);

	const setPermission = useCallback((value) => {
		setPermissionValues(setPermissionValue, value);
	}, [setPermissionValues, setPermissionValue]);

	useEffect(() => {
		if (ready && newPermission?.label) {
			dispatch(createUserPermission(newPermission))
			setReady(false);
			if (isSuccess) {
				toast.success(`User Permissions: - ${newPermission.label} - created successfully!`);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ready, newPermission?.name, dispatch])

	const permissionAddedCheck = useCallback((pid) => {
		return !!userPermissions?.find(_ => _?.pid === pid)
	}, [userPermissions]);

	useEffect(() => {
		if (permissionAddedCheck(newPermission?.pid)) {
			const permissions = [...rolePermissions, newPermission?.pid];
			setValue('permissions')(permissions)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newPermission?.pid, permissionAddedCheck]);

	useEffect(() => {
		if(clear) {
			setReady(false);
			setNewPermission(inputSchemas.userPermission);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clear]);

	return {
		dropdownOptions,
		setPermission,
		setReady,
		isLoading
	}
}

export default useCreatePermission
