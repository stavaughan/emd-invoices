import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const { errorMessage, initialStatus, caseStates, resetState } = featuresLogic
const { getData, deleteItem, updateValue, createItem } = httpRequests;
const { pendingState, fulfilledState, rejectedState } = caseStates;

const initialState = {
	userPermissions: [],
	...initialStatus
}

const API_URL = '/api/user-permissions/'

export const createUserPermission = createAsyncThunk(
    'userPermissions/create',
    async (reqData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await createItem(API_URL, reqData, token)
        } catch (error) {
            const message = errorMessage(error, 'new permission')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getUserPermissions = createAsyncThunk(
    'userPermissions/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await getData(API_URL, token)
        } catch (error) {
            const message = errorMessage(error)
            return thunkAPI.rejectWithValue(message)
        }
    }
);

export const deleteUserPermission = createAsyncThunk(
    'userPermissions/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await deleteItem(API_URL, id, token)
        } catch (error) {
            const message = errorMessage(error)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const updateUserPermission = createAsyncThunk(
    'userPermissions/update',
    async (reqData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await updateValue(API_URL, reqData, token)
        } catch (error) {
            const message = errorMessage(error)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const userPermissionsSlice = createSlice({
    name: 'userPermissions',
    initialState,
    reducers: {
        reset: resetState
    },
    extraReducers: (builder) => {
        builder
			.addCase(createUserPermission.pending, pendingState)
			.addCase(createUserPermission.fulfilled, (state, action) => {
				fulfilledState(state)
				state.userPermissions.push(action.payload)
			})
			.addCase(createUserPermission.rejected, rejectedState)
            .addCase(getUserPermissions.pending, pendingState)
            .addCase(getUserPermissions.fulfilled, (state, action) => {
                fulfilledState(state)
                state.userPermissions = action.payload
            })
            .addCase(getUserPermissions.rejected, rejectedState)
            .addCase(updateUserPermission.pending, pendingState)
            .addCase(updateUserPermission.fulfilled, (state, action) => {
                fulfilledState(state)
                state.userPermissions = state.userPermissions
                    .map(user => user._id === action.payload._id ? action.payload : user)
				state.user = action.payload
            })
            .addCase(updateUserPermission.rejected, rejectedState)
            .addCase(deleteUserPermission.pending, pendingState)
            .addCase(deleteUserPermission.fulfilled, (state, action) => {
                fulfilledState(state)
                state.userPermissions = state.userPermissions.filter(
                    (user) => user._id !== action.payload.id
                )
            })
            .addCase(deleteUserPermission.rejected, rejectedState)
    },
})

export const { reset: resetUserPermissions } = userPermissionsSlice.actions
export default userPermissionsSlice.reducer
