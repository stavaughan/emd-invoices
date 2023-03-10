import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const { errorMessage, initialStatus, caseStates, resetState } = featuresLogic
const { createItem, getData, deleteItem, updateValue } = httpRequests;
const { pendingState, fulfilledState, rejectedState } = caseStates

const initialState = {
    customers: [],
    ...initialStatus
}

const API_URL = '/api/customers/'

export const createCustomer = createAsyncThunk(
    'customers/create',
    async (reqData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await createItem(API_URL, reqData, token)
        } catch (error) {
            const message = errorMessage(error, 'new customer')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getCustomers = createAsyncThunk(
    'customers/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await getData(API_URL, token)
        } catch (error) {
            const message = errorMessage(error, 'customers')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteCustomer = createAsyncThunk(
    'customers/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await deleteItem(API_URL, id, token)
        } catch (error) {
            const message = errorMessage(error, 'delete customer')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const updateCustomer = createAsyncThunk(
    'customers/update',
    async (reqData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await updateValue(API_URL, reqData, token)
        } catch (error) {
            const message = errorMessage(error, 'update customer')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        reset: resetState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCustomer.pending, pendingState)
            .addCase(createCustomer.fulfilled, (state, action) => {
                fulfilledState(state)
                state.customers.push(action.payload)
            })
            .addCase(createCustomer.rejected, rejectedState)
            .addCase(getCustomers.pending, pendingState)
            .addCase(getCustomers.fulfilled, (state, action) => {
                fulfilledState(state)
                state.customers = action.payload
            })
            .addCase(getCustomers.rejected, rejectedState)
            .addCase(deleteCustomer.pending, pendingState)
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                fulfilledState(state)
                state.customers = state.customers.filter(customer => customer._id !== action.payload.id)
            })
            .addCase(deleteCustomer.rejected, rejectedState)
            .addCase(updateCustomer.pending, pendingState)
            .addCase(updateCustomer.fulfilled, (state, action) => {
                fulfilledState(state)
                state.customers = state.customers
                    .map(customer => customer._id === action.payload._id ? action.payload : customer)
            })
            .addCase(updateCustomer.rejected, rejectedState)
    },
})

export const { reset: resetCustomers } = customersSlice.actions
export default customersSlice.reducer
