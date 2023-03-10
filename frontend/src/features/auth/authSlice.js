import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from 'features'

const {
	errorMessage,
	initialStatus,
	caseStates,
	resetState,
	userFromStorage,
	resetUserStorage
} = featuresLogic
const {
    registerUser,
    activateUser,
    userLogin,
	userContactUpdate,
    forgotUserPassword,
    verifyUserEmail,
    requestUserAccess,
    resetUserPassword,
	newAccountSetup,
	uploadUserAvatarImage,
    userLogout
} = httpRequests;

const { pendingState, fulfilledState, rejectedState } = caseStates;

const user = userFromStorage();

const initialState = {
	user,
	avatarID: user?.avatarID,
	...initialStatus
};

const API_URL = '/api/users/'

export const updateUserContact = createAsyncThunk(
	'auth/update',
	async (reqData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await userContactUpdate(API_URL + 'update', reqData, token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const resetUserEmail = createAsyncThunk(
	'auth/resetEmail',
	async (reqData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await userContactUpdate(API_URL + 'reset-useremail', reqData, token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        try {
            return await registerUser(API_URL, user)
        } catch (error) {
            const message = errorMessage(error)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const activate = createAsyncThunk(
    'auth/activate',
    async (user, thunkAPI) => {
        try {
            return await activateUser(API_URL, user, user.token)
        } catch (error) {
            const message = errorMessage(error)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
    try {
        return await userLogin(API_URL, user)
    } catch (error) {
        const message = errorMessage(error, 'login user')
        return thunkAPI.rejectWithValue(message)
    }
})

export const forgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async (user, thunkAPI) => {
        try {
            return await forgotUserPassword(API_URL, user)
        } catch (error) {
            const message = errorMessage(error, 'forgot password')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const verifyEmail = createAsyncThunk(
    'auth/verifyEmail',
    async (user, thunkAPI) => {
        try {
            return await verifyUserEmail(API_URL, user)
        } catch (error) {
            const message = errorMessage(error, 'verify user email')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const requestAccess = createAsyncThunk(
    'auth/requestAccess',
    async (user, thunkAPI) => {
        try {
            return await requestUserAccess(API_URL, user)
        } catch (error) {
            const message = errorMessage(error, 'request user access')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const accountSetup = createAsyncThunk(
    'auth/accountSetup',
    async (user, thunkAPI) => {
        try {
            return await newAccountSetup(API_URL, user)
        } catch (error) {
            const message = errorMessage(error, 'new user account setup')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (user, thunkAPI) => {
        try {
            return await resetUserPassword(API_URL, user, user.token)
        } catch (error) {
            const message = errorMessage(error, 'reset user password')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const uploadUserAvatar = createAsyncThunk(
    'auth/uploadAvatar',
    async (imageData, thunkAPI) => {

        try {
            const token = thunkAPI.getState().auth.user.token
            return await uploadUserAvatarImage('/api/images/', imageData, token)
        } catch (error) {
            const message = errorMessage(error, 'upload user avatar')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const logout = createAsyncThunk('auth/logout', async () => await userLogout())

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: resetState
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, pendingState)
            .addCase(register.fulfilled, (state, action) => {
                fulfilledState(state)
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                rejectedState(state, action)
                state.user = null
            })
            .addCase(activate.pending, pendingState)
            .addCase(activate.fulfilled, (state, action) => {
                fulfilledState(state)
                state.user = action.payload
            })
            .addCase(activate.rejected, (state, action) => {
                rejectedState(state, action)
                state.user = null
            })
            .addCase(forgotPassword.pending, pendingState)
            .addCase(forgotPassword.fulfilled, (state, action) => {
				fulfilledState(state)
                state.user = action.payload
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                rejectedState(state, action)
                state.user = null
            })
            .addCase(verifyEmail.pending, pendingState)
            .addCase(verifyEmail.fulfilled, (state, action) => {
                fulfilledState(state)
                state.user = action.payload
            })
            .addCase(verifyEmail.rejected, (state, action) => {
                rejectedState(state, action)
                state.user = null
            })
            .addCase(requestAccess.pending, pendingState)
            .addCase(requestAccess.fulfilled, (state, action) => {
                fulfilledState(state)
                state.user = action.payload
            })
            .addCase(requestAccess.rejected, (state, action) => {
                rejectedState(state, action)
                state.user = null
            })
            .addCase(accountSetup.pending, pendingState)
            .addCase(accountSetup.fulfilled, (state, action) => {
                fulfilledState(state)
                state.user = action.payload
            })
            .addCase(accountSetup.rejected, (state, action) => {
                rejectedState(state, action)
                state.user = null
            })
            .addCase(resetPassword.pending, pendingState)
            .addCase(resetPassword.fulfilled, (state, action) => {
                fulfilledState(state)
                state.user = action.payload
            })
            .addCase(resetPassword.rejected, (state, action) => {
                rejectedState(state, action)
                state.user = null
            })
            .addCase(updateUserContact.pending, pendingState)
            .addCase(updateUserContact.fulfilled, (state, action) => {
                fulfilledState(state)
                state.user = action.payload
				state.avatarID = action.payload.avatarID
            })
            .addCase(updateUserContact.rejected, (state, action) => {
                rejectedState(state, action)
                state.user = user
            })
            .addCase(resetUserEmail.pending, pendingState)
            .addCase(resetUserEmail.fulfilled, (state, action) => {
                fulfilledState(state)
                state.user = action.payload
				state.avatarID = action.payload.avatarID
            })
            .addCase(resetUserEmail.rejected, (state, action) => {
                rejectedState(state, action)
                state.user = user
            })
            .addCase(uploadUserAvatar.pending, pendingState)
            .addCase(uploadUserAvatar.fulfilled, (state, action) => {
                fulfilledState(state)
                state.avatarID = action.payload.pid
				state.user = action.payload.userContact
            })
            .addCase(uploadUserAvatar.rejected, rejectedState)
            .addCase(login.pending, pendingState)
            .addCase(login.fulfilled, (state, action) => {
                fulfilledState(state)
                state.user = action.payload
				state.avatarID = action.payload.avatarID
            })
            .addCase(login.rejected, (state, action) => {
                rejectedState(state, action)
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
				state.user = null
				resetUserStorage()
            })
    },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
