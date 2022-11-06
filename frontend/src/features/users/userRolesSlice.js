import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const { errorMessage, initialStatus, caseStates, resetState } = featuresLogic
const { getData, deleteItem, updateValue, createItem } = httpRequests;
const { pendingState, fulfilledState, rejectedState } = caseStates;

const initialState = {
	userRoles: [],
	...initialStatus
}

const API_URL = '/api/user-roles/'

export const createUserRole = createAsyncThunk(
    'userRoles/create',
    async (reqData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await createItem(API_URL, reqData, token)
        } catch (error) {
            const message = errorMessage(error, 'new role')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getUserRoles = createAsyncThunk(
    'userRoles/getAll',
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

export const deleteUserRole = createAsyncThunk(
    'userRoles/delete',
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

export const updateUserRole = createAsyncThunk(
    'userRoles/update',
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

export const userRolesSlice = createSlice({
    name: 'userRoles',
    initialState,
    reducers: {
        reset: resetState
    },
    extraReducers: (builder) => {
        builder
			.addCase(createUserRole.pending, pendingState)
			.addCase(createUserRole.fulfilled, (state, action) => {
				fulfilledState(state)
				state.userRoles.push(action.payload)
			})
			.addCase(createUserRole.rejected, rejectedState)
            .addCase(getUserRoles.pending, pendingState)
            .addCase(getUserRoles.fulfilled, (state, action) => {
                fulfilledState(state)
                state.userRoles = action.payload
            })
            .addCase(getUserRoles.rejected, rejectedState)
            .addCase(updateUserRole.pending, pendingState)
            .addCase(updateUserRole.fulfilled, (state, action) => {
                fulfilledState(state)
                state.userRoles = state.userRoles
                    .map(user => user._id === action.payload._id ? action.payload : user)
				state.user = action.payload
            })
            .addCase(updateUserRole.rejected, rejectedState)
            .addCase(deleteUserRole.pending, pendingState)
            .addCase(deleteUserRole.fulfilled, (state, action) => {
                fulfilledState(state)
                state.userRoles = state.userRoles.filter(
                    (user) => user._id !== action.payload.id
                )
            })
            .addCase(deleteUserRole.rejected, rejectedState)
    },
})

export const { reset: resetUserRoles } = userRolesSlice.actions
export default userRolesSlice.reducer
