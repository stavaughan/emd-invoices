import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const { errorMessage, initialStatus, caseStates, resetState } = featuresLogic
const {
    getImages,
    uploadImageToCloudinary,
    uploadImageToDirectory
} = httpRequests;
const { pendingState, fulfilledState, rejectedState } = caseStates;

const initialState = {
    imageIds: [],
    uploadImageID: '',
    inventoryImages: [],
    uploadedImage: {},
    ...initialStatus
}

const IMAGES_ROOT = '/api/images/'
const API_INVOICES_IMAGES = IMAGES_ROOT + 'invoices';
const API_INVENTORY_IMAGES = IMAGES_ROOT + 'inventory';

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
    'images/uploadInvoiceImage',
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

export const uploadLocalImage = createAsyncThunk(
    'images/uploadInventoryImage',
    async (imageData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await uploadImageToDirectory(API_INVENTORY_IMAGES, imageData, token)
        } catch (error) {
            const message = errorMessage(error, 'upload inventory image')
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
            state.inventoryImages = []
            state.uploadedImage = {}
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
                state.uploadImageID = action.payload.pid
            })
            .addCase(uploadCloudinaryImage.rejected, (state, action) => {
                rejectedState(state, action)
                state.uploadImageID = ''
            })
            .addCase(uploadLocalImage.pending, pendingState)
            .addCase(uploadLocalImage.fulfilled, (state, action) => {
                fulfilledState(state)
                state.uploadedImage = action.payload
            })
            .addCase(uploadLocalImage.rejected, rejectedState)
    },
})

export const { reset: resetImages } = imagesSlice.actions

export default imagesSlice.reducer
