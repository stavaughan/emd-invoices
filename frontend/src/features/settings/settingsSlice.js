import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const { errorMessage, initialStatus, caseStates, resetState } = featuresLogic
const { createField, getPublicItem, deleteField, updateValue } = httpRequests;
const { pendingState, fulfilledState, rejectedState } = caseStates;

const initialState = { settings: {}, ...initialStatus }

const API_URL = '/api/app-settings/'

const errorMsg = sessionStorage.getItem('settingsError');

export const createSettingField = createAsyncThunk(
    'settings/create',
    async (reqData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await createField(API_URL, reqData, token)
        } catch (error) {
            const message = errorMessage(error)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getSettings = createAsyncThunk(
    'settings/getAll',
    async (_, thunkAPI) => {
        try {
            if(errorMsg) {
                return thunkAPI.rejectWithValue('Cant connect to the server')
            }
            return await getPublicItem(API_URL)
        } catch (error) {
            const message = errorMessage(error)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteSettingData = createAsyncThunk(
    'settings/delete',
    async (fieldKey, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await deleteField(API_URL, fieldKey, token)
        } catch (error) {
            const message = errorMessage(error)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const updateSettings = createAsyncThunk(
    'settings/update',
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

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        reset: resetState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createSettingField.pending, pendingState)
            .addCase(createSettingField.fulfilled, (state, action) => {
                fulfilledState(state)
                state.settings = action.payload
            })
            .addCase(createSettingField.rejected, rejectedState)
            .addCase(getSettings.pending, pendingState)
            .addCase(getSettings.fulfilled, (state, action) => {
                fulfilledState(state)
                state.settings = action.payload
            })
            .addCase(getSettings.rejected, rejectedState)
            .addCase(deleteSettingData.pending, pendingState)
            .addCase(deleteSettingData.fulfilled, (state, action) => {
                fulfilledState(state)
                state.settings = action.payload
            })
            .addCase(deleteSettingData.rejected, rejectedState)
            .addCase(updateSettings.pending, pendingState)
            .addCase(updateSettings.fulfilled, (state, action) => {
                fulfilledState(state)
                state.settings = action.payload
            })
            .addCase(updateSettings.rejected, rejectedState)
    },
})

export const { reset: resetSettings } = settingsSlice.actions
export default settingsSlice.reducer
