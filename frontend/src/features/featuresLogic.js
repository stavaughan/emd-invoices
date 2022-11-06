import { Global } from "globals/js";

const fetchTimeout = (fn, ms) => {
	return new Promise(resolve => setTimeout(() => fn(), ms));
}

const fetchError = (status, endpoint) => {
	switch (true) {
		case status === 500:
			return `Internal Server Error while attempting to access endpoint to ${endpoint}. Server is not responding or doesn't exist.`;
		case status === 401:
			return `The API endpoint to ${endpoint} cannot be accessed.`;
		case status === 403:
			return `Access Denied! - You are not authorized to access this resource. - ${endpoint}`;
		case status === 404:
			return `The API endpoint to ${endpoint} cannot not found.`;
		default:
			return `Could not access response for the requested endpoint`;
	}
};

const setSelectedItem = async (state, items, selItem, selID) => {
	if(!selItem && !selID) return
	if (selID) {
		state[selID] = state[items]?.length ? state[items][0]._id : ''
	}
	if (selItem) {
		state[selItem] = state[items]?.length ? state[items][0] : {}
	}
};

const featuresLogic = {

	sortBy: (items, sortKey, order) => {
		const skey = sortKey || 'dateString';
		return Global.sortData(items, skey, order);
	},

	initialStatus: {
		isError: false,
		isSuccess: false,
		isLoading: false,
		message: ''
	},

	resetState: (state) => {
		state.isError = false
		state.isSuccess = false
		state.isLoading = false
		state.message = ''
	},

	caseStates: {
		pendingState: (state) => {
			state.isSuccess = false
			state.isError = false
			state.isLoading = true
		},
		fulfilledState: (state) => {
			state.isLoading = false
			state.isError = false
			state.isSuccess = true
		},
		rejectedState: (state, action) => {
			state.isLoading = false
			state.isSuccess = false
			state.isError = true
			state.message = action.payload
		}
	},

	errorMessage: (err, endpoint) => {
		const status = err?.response?.status;
		const message = (err?.response?.data?.message) || err.message;
		const defaultMsg = err.toString();
		if (message) {
			return message;
		} else {
			return status ? fetchError(status, endpoint) : defaultMsg;
		}
	},

	configAuth: (token) => ({
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}),

	setUserStorage: async (user) => {
		if (user?.userEmail) {
			user?.savePW === 'local'
				? localStorage.setItem('user', JSON.stringify(user))
				: sessionStorage.setItem('user', JSON.stringify(user))
		}
	},

	resetUserStorage: () => {
		localStorage.removeItem('user');
		sessionStorage.removeItem('user');
	},

	configWUpdateUI: (token, setPercentage) => ({
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		onUploadProgress: async (progressEvent) => {
			setPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
			fetchTimeout(() => setPercentage(0), 2700)
		}
	}),

	deleteHandler: ({ setLoading, dispatch, deleteSlice, deleteId }) => {
		setLoading(true)
		const fn = () => {
			dispatch(deleteSlice(deleteId))
			setLoading(false)
		}
		fetchTimeout(fn, 500)
	},

	getResultsslice: async (state, action, items, selID, selItem, sortName) => {
		state[items] = action.payload
		if(sortName) {
			state[items] = featuresLogic.sortBy(state[items], sortName, 'asc')
		}
		await setSelectedItem(state, items, selItem, selID)
	},

	deleteResultsSlice: async (state, action, items, selID, selItem) => {
		const ids = action.payload?.ids?.length ? action.payload.ids : [action.payload.id];
		state[items] = state[items].filter(item => !ids.includes(item._id));
		await setSelectedItem(state, items, selItem, selID)
	},

	refreshAccounts: (state) => {
		state.accounts = featuresLogic.sortBy(state.accounts, 'accountName', 'asc')
		state.selectedID = state.accounts?.length ? state.accounts[0]._id : ''
		state.selectAccount = state.accounts?.length ? state.accounts[0] : {}
		state.financialAccounts = state.accounts.filter(account => account.category === 'financial')
		state.selectedFAID = state.financialAccounts?.length ? state.financialAccounts[0]._id : ''
		state.selectFAccount = state.financialAccounts?.length ? state.financialAccounts[0] : {}
	},

	userFromStorage: () => {
		const userLocal = localStorage.getItem('user');
		const userSession = sessionStorage.getItem('user');
		const user = userLocal ? JSON.parse(userLocal) : JSON.parse(userSession);
		return user || null;
	}
}

export default featuresLogic
