import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const {
	createItem,
	createMultiData,
	getMultiData,
	updateItems,
	deleteItem,
	updateValue
} = httpRequests;

const { errorMessage, sortBy, initialStatus, caseStates, resetState } = featuresLogic
const { pendingState, fulfilledState, rejectedState } = caseStates

const initialState = {
	sortBy: 'desc',
	invoices: [],
	services: [],
	filteredInvoices: [],
	selectedID: '',
	selectedInvoice: null,
	...initialStatus
}

const API_INVOICES = '/api/invoices/'
const API_SERVICES = '/api/services/'

const currentYear = new Date().getFullYear();

const invoiceYear = (invoice) => new Date(invoice.dateCreated).getFullYear();

const resetInvoicesState = (state) => {
	state.invoices = sortBy(state.invoices, 'dateCreated', 'desc')
	state.filteredInvoices = state.invoices.filter(invoice => currentYear === invoiceYear(invoice))
};

const setSelectedToFirst = (state) => {
	state.selectedID = state.filteredInvoices?.length ? state.filteredInvoices[0]?._id : ''
	state.selectedInvoice = state.filteredInvoices?.length ? state.filteredInvoices[0] : {}
};

const resetSelectStates = (state) => {
	resetInvoicesState(state)
	setSelectedToFirst(state)
};

// When a single invoice is updated
const updateSelectState = (state, action) => {
	state.invoices = state.invoices
		.map(invoice => invoice._id === action.payload._id ? action.payload : invoice)
	state.filteredInvoices = state.filteredInvoices
		.map(invoice => invoice._id === action.payload._id ? action.payload : invoice)
	resetSelectStates(state)
}

// when multiple invoices are updated
const updateSelectStates = (state, action) => {
	const payloadIDs = action.payload.map(_ => _._id)
	state.invoices = state.invoices
		.map(invoice => payloadIDs.includes(invoice._id)
			? action.payload.find(_ => _._id === invoice._id)
			: invoice)
	state.filteredInvoices = state.filteredInvoices
		.map(invoice => payloadIDs.includes(invoice._id)
			? action.payload.find(_ => _._id === invoice._id)
			: invoice)
	resetInvoicesState(state)
};

export const createInvoice = createAsyncThunk(
	'invoicedata/createInvoice',
	async (reqData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await createItem(API_INVOICES, reqData, token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
);

export const createService = createAsyncThunk(
	'invoicedata/createService',
	async (reqData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await createItem(API_SERVICES, reqData, token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
);

export const createInvoicesData = createAsyncThunk(
	'invoicedata/createMany',
	async (reqData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			const postData = [
				{ API: API_INVOICES + 'many', data: reqData.invoices },
				{ API: API_SERVICES + 'many', data: reqData.services }
			]
			return await createMultiData(postData, token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const getInvoiceData = createAsyncThunk(
	'invoicedata/getAll',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await getMultiData([API_INVOICES, API_SERVICES], token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const deleteInvoice = createAsyncThunk(
	'invoicedata/deleteInvoice',
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await deleteItem(API_INVOICES, id, token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const deleteService = createAsyncThunk(
	'invoicedata/deleteService',
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await deleteItem(API_SERVICES, id, token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const updateInvoices = createAsyncThunk(
	'invoicedata/updateInvoices',
	async (reqData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await updateItems(API_INVOICES, reqData, token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
);

export const updateInvoice = createAsyncThunk(
	'invoicedata/updateInvoice',
	async (reqData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await updateValue(API_INVOICES, reqData, token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
);

export const updateService = createAsyncThunk(
	'invoicedata/updateService',
	async (reqData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await updateValue(API_SERVICES, reqData, token)
		} catch (error) {
			const message = errorMessage(error)
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const invoiceDataSlice = createSlice({
	name: 'invoicedata',
	initialState,
	reducers: {
		reset: resetState,
		setSelectedID: (state, action) => {
			state.selectedID = action?.payload.id
			state.selectedInvoice = state.invoices?.length && action?.payload.id
				? state.invoices.find(invoice => invoice._id === action?.payload.id)
				: {}
		},
		sortDesc: (state) => {
			state.sortBy = 'desc'
			state.filteredInvoices = sortBy(state.filteredInvoices, 'dateCreated', 'desc');
			setSelectedToFirst(state)
		},
		sortAsc: (state) => {
			state.sortBy = 'asc'
			state.filteredInvoices = sortBy(state.filteredInvoices, 'dateCreated', 'asc');
			setSelectedToFirst(state)
		},
		filterData: (state, action) => {
			state.filteredInvoices = action.payload.items
			setSelectedToFirst(state)
		},
		filterByKey: (state, action) => {
			const facet = action.payload.facet
			const value = action.payload.value
			state.filteredInvoices = state.invoices.filter(invoice => invoice[facet] === value)
			setSelectedToFirst(state)
		},
		filterByYear: (state, action) => {
			const year = action.payload.year
			state.filteredInvoices = state.invoices.filter(invoice => year === invoiceYear(invoice))
			setSelectedToFirst(state)
		},
		resetFilters: (state) => resetSelectStates(state)
	},
	extraReducers: (builder) => {
		builder
			.addCase(createInvoice.pending, pendingState)
			.addCase(createInvoice.fulfilled, (state, action) => {
				fulfilledState(state)
				state.invoices.push(action.payload)
				resetInvoicesState(state)
				state.selectedID = action.payload?._id
				state.selectedInvoice = action.payload
			})
			.addCase(createInvoice.rejected, rejectedState)
			.addCase(createService.pending, pendingState)
			.addCase(createService.fulfilled, (state, action) => {
				fulfilledState(state)
				state.services.push(action.payload)
			})
			.addCase(createService.rejected, rejectedState)
			.addCase(createInvoicesData.pending, pendingState)
			.addCase(createInvoicesData.fulfilled, (state, action) => {
				fulfilledState(state)
				state.invoices.push(action.payload.data1)
				state.services.push(action.payload.data2)
				resetSelectStates(state)
			})
			.addCase(createInvoicesData.rejected, rejectedState)
			.addCase(getInvoiceData.pending, pendingState)
			.addCase(getInvoiceData.fulfilled, (state, action) => {
				fulfilledState(state)
				state.invoices = action.payload.data1
				state.services = action.payload.data2
				resetSelectStates(state)
			})
			.addCase(getInvoiceData.rejected, rejectedState)
			.addCase(updateInvoice.pending, pendingState)
			.addCase(updateInvoice.fulfilled, (state, action) => {
				fulfilledState(state)
				updateSelectState(state, action)
			})
			.addCase(updateInvoice.rejected, rejectedState)
			.addCase(updateInvoices.pending, pendingState)
			.addCase(updateInvoices.fulfilled, (state, action) => {
				fulfilledState(state)
				updateSelectStates(state, action)
			})
			.addCase(updateInvoices.rejected, rejectedState)
			.addCase(updateService.pending, pendingState)
			.addCase(updateService.fulfilled, (state, action) => {
				fulfilledState(state)
				state.services = state.services.filter(service => service._id !== action.payload.id)
			})
			.addCase(updateService.rejected, rejectedState)
			.addCase(deleteInvoice.pending, pendingState)
			.addCase(deleteInvoice.fulfilled, (state, action) => {
				fulfilledState(state)
				state.invoices = state.invoices.filter(invoice => invoice._id !== action.payload.id)
				resetSelectStates(state)
			})
			.addCase(deleteInvoice.rejected, rejectedState)
			.addCase(deleteService.pending, pendingState)
			.addCase(deleteService.fulfilled, (state, action) => {
				fulfilledState(state)
				state.services = state.services.filter(service => service._id !== action.payload.id)
				state.selectedID = state.services?.length ? state.services[0]._id : ''
			})
			.addCase(deleteService.rejected, rejectedState)
	}
})

export const {
	reset: resetInvoiceData,
	sortDesc: sortInvoicesDesc,
	sortAsc: sortInvoicesAsc,
	setSelectedID: setSelectInvoiceID,
	filterByKey: filterInvoices,
	resetFilters: resetInvoiceFilters,
	filterByYear: filterInvoiceByYear
} = invoiceDataSlice.actions
export default invoiceDataSlice.reducer
