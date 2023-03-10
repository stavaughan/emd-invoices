import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const { errorMessage, initialStatus, caseStates, resetState } = featuresLogic
const {
    getImages,
    uploadImageToCloudinary,
    uploadImageToInventory,
	generateOpenAIImage
} = httpRequests;
const { pendingState, fulfilledState, rejectedState } = caseStates;

const initialState = {
    imageIds: [],
    uploadImageID: '',
	inventoryImageID: '',
	invoiceImageID: '',
	avatarImageID: '',
	businessImageID: '',
	generatedImage: {},
	idType: '',
    inventoryImages: [],
    uploadedImage: {},
    ...initialStatus
}

const IMAGES_ROOT = '/api/images/'
const API_INVOICES_IMAGES = IMAGES_ROOT + 'invoices';
const API_INVENTORY_IMAGES = IMAGES_ROOT + 'inventory';
const API_BUSINESS_LOGO = IMAGES_ROOT + 'logo';
const API_OPENAI_IMAGE = IMAGES_ROOT + 'generate-image';

export const getInvoiceImages = createAsyncThunk(
    'images/getInvoiceImages',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await getImages(API_INVOICES_IMAGES, token, 'invoices')
        } catch (error) {
            const message = errorMessage(error, 'invoice images')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getInventoryImages = createAsyncThunk(
    'images/getInventoryImages',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await getImages(API_INVENTORY_IMAGES, token)
        } catch (error) {
            const message = errorMessage(error, 'inventory images')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const uploadCloudinaryImage = createAsyncThunk(
    'images/uploadCloudinaryImage',
    async (imageData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await uploadImageToCloudinary(IMAGES_ROOT, imageData, token)
        } catch (error) {
            const message = errorMessage(error, 'upload invoice image')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const uploadInventoryImage = createAsyncThunk(
    'images/uploadInventoryImage',
    async (imageData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await uploadImageToInventory(API_INVENTORY_IMAGES, imageData, token)
        } catch (error) {
            const message = errorMessage(error, 'upload inventory image')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const uploadInvoiceImage = createAsyncThunk(
    'images/uploadInvoiceImage',
    async (imageData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await uploadImageToInventory(API_INVOICES_IMAGES, imageData, token)
        } catch (error) {
            const message = errorMessage(error, 'upload inventory image')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const uploadBusinessLogo = createAsyncThunk(
    'images/uploadBusinessLogo',
    async (imageData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await uploadImageToInventory(API_BUSINESS_LOGO, imageData, token)
        } catch (error) {
            const message = errorMessage(error, 'upload business logo')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const createImageFromPrompt = createAsyncThunk(
    'images/uploadGeneratedImage',
    async (imageData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await generateOpenAIImage(API_OPENAI_IMAGE, imageData, token)
        } catch (error) {
            const message = errorMessage(error, 'upload generated image')
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        reset: (state) => {
            state.uploadImageID = ''
			state.inventoryImageID = ''
			state.invoiceImageID = ''
			state.avatarImageID = ''
			state.businessImageID = ''
            state.inventoryImages = []
            state.uploadedImage = {}
			state.idType = ''
			resetState(state)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getInvoiceImages.pending, pendingState)
            .addCase(getInvoiceImages.fulfilled, (state, action) => {
                fulfilledState(state)
                state.imageIds = action.payload
            })
            .addCase(getInvoiceImages.rejected, rejectedState)
            .addCase(getInventoryImages.pending, pendingState)
            .addCase(getInventoryImages.fulfilled, (state, action) => {
                fulfilledState(state)
                state.inventoryImages = action.payload
            })
            .addCase(getInventoryImages.rejected, rejectedState)
            .addCase(uploadCloudinaryImage.pending, pendingState)
            .addCase(uploadCloudinaryImage.fulfilled, (state, action) => {
                fulfilledState(state)
				state.idType = action.payload.idType
                state.uploadImageID = action.payload.pid
            })
            .addCase(uploadCloudinaryImage.rejected, (state, action) => {
                rejectedState(state, action)
                state.uploadImageID = ''
            })
            .addCase(uploadInventoryImage.pending, pendingState)
            .addCase(uploadInventoryImage.fulfilled, (state, action) => {
                fulfilledState(state)
                state.inventoryImageID = action.payload.pid
            })
			.addCase(uploadInventoryImage.rejected, (state, action) => {
                rejectedState(state, action)
                state.inventoryImageID = ''
            })
            .addCase(uploadBusinessLogo.pending, pendingState)
            .addCase(uploadBusinessLogo.fulfilled, (state, action) => {
                fulfilledState(state)
                state.businessImageID = action.payload.pid
            })
			.addCase(uploadBusinessLogo.rejected, (state, action) => {
                rejectedState(state, action)
                state.businessImageID = ''
            })
            .addCase(uploadInvoiceImage.pending, pendingState)
            .addCase(uploadInvoiceImage.fulfilled, (state, action) => {
                fulfilledState(state)
                state.invoiceImageID = action.payload.pid
            })
			.addCase(uploadInvoiceImage.rejected, (state, action) => {
                rejectedState(state, action)
                state.invoiceImageID = ''
            })
			.addCase(createImageFromPrompt.pending, pendingState)
            .addCase(createImageFromPrompt.fulfilled, (state, action) => {
                fulfilledState(state)
                state.generatedImage = action.payload
            })
			.addCase(createImageFromPrompt.rejected, (state, action) => {
                rejectedState(state, action)
                state.generatedImage = {}
            })
    },
})

export const { reset: resetImages } = imagesSlice.actions

export default imagesSlice.reducer
