import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const { errorMessage, initialStatus, caseStates, resetState, userFromStorage } = featuresLogic
const { grantUserAccess, getData, deleteItem, updateValue } = httpRequests;
const { pendingState, fulfilledState, rejectedState } = caseStates;

const user = userFromStorage();

const initialState = {
	users: [],
	user,
	...initialStatus
}

const API_URL = '/api/users/'

export const getUsers = createAsyncThunk(
	'users/getAll',
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

export const deleteUser = createAsyncThunk(
	'users/delete',
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

export const updateUser = createAsyncThunk(
	'users/update',
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

export const grantAccess = createAsyncThunk(
	'users/grantAccess',
	async (user, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await grantUserAccess(API_URL, user, token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const usersSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		reset: resetState
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, pendingState)
			.addCase(getUsers.fulfilled, (state, action) => {
				fulfilledState(state)
				state.users = action.payload
			})
			.addCase(getUsers.rejected, rejectedState)
			.addCase(updateUser.pending, pendingState)
			.addCase(updateUser.fulfilled, (state, action) => {
				fulfilledState(state)
				state.users = state.users.map(user =>
					user._id === action.payload._id
						? action.payload : user)
				state.user = action.payload
			})
			.addCase(updateUser.rejected, rejectedState)
			.addCase(deleteUser.pending, pendingState)
			.addCase(deleteUser.fulfilled, (state, action) => {
				fulfilledState(state)
				state.users = state.users.filter(
					(user) => user._id !== action.payload.id
				)
			})
			.addCase(deleteUser.rejected, rejectedState)
			.addCase(grantAccess.pending, pendingState)
			.addCase(grantAccess.fulfilled, (state, action) => {
				fulfilledState(state)
				state.users.push(action.payload)
			})
			.addCase(grantAccess.rejected, (state, action) => {
				rejectedState(state, action)
				state.user = null
			})
	},
})

export const { reset } = usersSlice.actions
export default usersSlice.reducer
