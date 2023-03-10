import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const {
	errorMessage,
	sortBy,
	initialStatus,
	caseStates,
	getResultsslice,
	deleteResultsSlice,
	resetState
} = featuresLogic
const { createItem, getData, deleteItem, updateValue } = httpRequests;
const { pendingState, fulfilledState, rejectedState } = caseStates

const initialState = {
    contacts: [],
	newID: '',
    selectedID: '',
	selectContact: {},
    ...initialStatus
};

const API_URL = '/api/contacts/'

export const createContact = createAsyncThunk(
    'contacts/create',
    async (reqData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await createItem(API_URL, reqData, token)
        } catch (error) {
            const message = errorMessage(error, 'new contact')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getContacts = createAsyncThunk(
    'contacts/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await getData(API_URL, token)
        } catch (error) {
            const message = errorMessage(error, 'contacts')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await deleteItem(API_URL, id, token)
        } catch (error) {
            const message = errorMessage(error, 'delete contact')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const updateContact = createAsyncThunk(
    'contacts/update',
    async (reqData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await updateValue(API_URL, reqData, token)
        } catch (error) {
            const message = errorMessage(error, 'update contact')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        reset: resetState,
		resetNewID: (state) => {
            state.newID = ''
		},
        setSelectedID: (state, action) => {
            state.selectedID = action?.payload?.id
			state.selectContact = state.contacts?.length && action?.payload.id
				? state.contacts.find(contact => contact._id === action?.payload.id)
				: {}
        },
        sortDesc: (state) => {
            state.contacts = sortBy(state.contacts, 'fullName', 'desc');
            state.selectedID = state.contacts?.length ? state.contacts[0]._id : ''
        },
        sortAsc: (state) => {
            state.contacts = sortBy(state.contacts, 'fullName', 'asc');
            state.selectedID = state.contacts?.length ? state.contacts[0]._id : ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createContact.pending, pendingState)
            .addCase(createContact.fulfilled, (state, action) => {
                fulfilledState(state)
                state.contacts.push(action.payload)
				state.newID = action.payload?._id
				state.selectedID = action.payload?._id
				state.selectContact = action.payload
            })
            .addCase(createContact.rejected, rejectedState)
            .addCase(getContacts.pending, pendingState)
            .addCase(getContacts.fulfilled, (state, action) => {
                fulfilledState(state)
				getResultsslice(state, action, 'contacts', 'selectedID', 'selectContact', 'fullName')
            })
            .addCase(getContacts.rejected, rejectedState)
            .addCase(deleteContact.pending, pendingState)
            .addCase(deleteContact.fulfilled, (state, action) => {
                fulfilledState(state)
				deleteResultsSlice(state, action, 'contacts', 'selectedID', 'selectContact')
            })
            .addCase(deleteContact.rejected, rejectedState)
            .addCase(updateContact.pending, pendingState)
            .addCase(updateContact.fulfilled, (state, action) => {
                fulfilledState(state)
				state.selectedID = action.payload?._id
				state.selectContact = action.payload
				state.contacts = state.contacts
                    .map(contact => contact._id === action.payload._id ? contact = action.payload : contact)
            })
            .addCase(updateContact.rejected, rejectedState)
    },
})

export const {
    reset: resetContacts,
	resetNewID,
    setSelectedID: setSelectContactID,
    sortDesc: sortContactsDesc,
    sortAsc: sortContactsAsc
} = contactsSlice.actions
export default contactsSlice.reducer
