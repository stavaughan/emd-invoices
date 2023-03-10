import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const { errorMessage, initialStatus, caseStates, resetState } = featuresLogic
const { createItem, getData, deleteItem, updateValue } = httpRequests;
const { pendingState, fulfilledState, rejectedState } = caseStates

const initialState = {
    businesses: [],
    ...initialStatus
}

const API_URL = '/api/businesses/'

export const createBusiness = createAsyncThunk(
    'businesses/create',
    async (reqData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await createItem(API_URL, reqData, token)
        } catch (error) {
            const message = errorMessage(error, 'new business')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getBusinesses = createAsyncThunk(
    'businesses/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await getData(API_URL, token)
        } catch (error) {
            const message = errorMessage(error, 'businesses')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteBusiness = createAsyncThunk(
    'businesses/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await deleteItem(API_URL, id, token)
        } catch (error) {
            const message = errorMessage(error, 'delete business')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const updateBusiness = createAsyncThunk(
    'businesses/update',
    async (reqData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await updateValue(API_URL, reqData, token)
        } catch (error) {
            const message = errorMessage(error, 'update business')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const businessesSlice = createSlice({
    name: 'businesses',
    initialState,
    reducers: {
        reset: resetState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBusiness.pending, pendingState)
            .addCase(createBusiness.fulfilled, (state, action) => {
                fulfilledState(state)
                state.businesses.push(action.payload)
            })
            .addCase(createBusiness.rejected, rejectedState)
            .addCase(getBusinesses.pending, pendingState)
            .addCase(getBusinesses.fulfilled, (state, action) => {
                fulfilledState(state)
                state.businesses = action.payload
            })
            .addCase(getBusinesses.rejected, rejectedState)
            .addCase(deleteBusiness.pending, pendingState)
            .addCase(deleteBusiness.fulfilled, (state, action) => {
                fulfilledState(state)
                state.businesses = state.businesses.filter(
                    (business) => business._id !== action.payload.id
                )
            })
            .addCase(deleteBusiness.rejected, rejectedState)
            .addCase(updateBusiness.pending, pendingState)
            .addCase(updateBusiness.fulfilled, (state, action) => {
                fulfilledState(state)
                state.businesses = state.businesses
                    .map(business => business._id === action.payload._id ? action.payload : business)
            })
            .addCase(updateBusiness.rejected, rejectedState)
    },
})

export const { reset: resetBusinesses } = businessesSlice.actions
export default businessesSlice.reducer
