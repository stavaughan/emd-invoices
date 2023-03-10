import axios from 'axios'
import { featuresLogic } from '.'

const { configAuth, setUserStorage, configWUpdateUI } = featuresLogic

const httpRequests = {

    registerUser: async (API_URL, userData) => {
        const response = await axios.post(API_URL, userData);
        const user = await response?.data;
        await setUserStorage(user)
        return user
    },

    activateUser: async (API_URL, userData, token) => {
        const response = await axios.post(API_URL + 'activate', userData, configAuth(token))
        const user = await response?.data;
        await setUserStorage(user)
        return user
    },

	userContactUpdate: async (API_URL, userData, token) => {
		const savePW = userData?.savePW
		const response = await axios.patch(API_URL, userData, configAuth(token))
		const user = await response?.data;
		await setUserStorage({ ...user, savePW })
		return user
	},

    userLogin:  async (API_URL, userData) => {
        const response = await axios.post(API_URL + 'login', userData)
        const user = await response?.data;
        const storedUser = { ...user, savePW: userData?.savePW }
        await setUserStorage(storedUser)
        return user
    },

	uploadInventoryImage: async (API_URL, imageData, token) => {
		const { api, reqData, setPercentage } = imageData;
		const response = await axios.post(API_URL + api, reqData, configWUpdateUI(token, setPercentage))
		const resData = await response.data;
		return resData
	},

	uploadUserAvatarImage: async (API_URL, imageData, token) => {
		const { api, reqData, setPercentage } = imageData;
		const response = await axios.post(API_URL + api, reqData, configWUpdateUI(token, setPercentage))
		const resData = await response.data;
		const storedUser = { ...resData?.userContact, savePW: resData?.savePW }
		await setUserStorage(storedUser)
		return resData
	},

    forgotUserPassword: async (API_URL, userData) => {
        const response = await axios.post(API_URL + 'forgot-password', userData)
        const user = await response?.data;
        return user
    },

    verifyUserEmail: async (API_URL, userData) => {
        const response = await axios.post(API_URL + 'verify-email', userData)
        const user = await response?.data;
        return user
    },

    requestUserAccess: async (API_URL, userData) => {
        const response = await axios.post(API_URL + 'request-access', userData)
        const user = await response?.data;
        await setUserStorage(user)
        return user
    },

	newAccountSetup: async (API_URL, userData) => {
        const response = await axios.post(API_URL + 'new-account', userData)
        const user = await response?.data;
        await setUserStorage(user)
        return user
    },

    resetUserPassword: async (API_URL, userData, token) => {
        const response = await axios.post(API_URL + 'reset', userData, configAuth(token))
        const user = await response?.data;
        const storedUser = { ...user, savePW: userData?.savePW }
        await setUserStorage(storedUser)
        return user
    },

    grantUserAccess: async (API_URL, userData, token) => {
        const response = await axios.post(API_URL + 'grant-access', userData, configAuth(token))
        const user = await response?.data;
        return user
    },

    userLogout: async () => {
        localStorage.removeItem('user')
        sessionStorage.removeItem('user')
    },

    createItem: async (API_URL, reqData, token) => {
        const response = await axios.post(API_URL, reqData, configAuth(token))
		return response.data
    },

    createField: async (API_URL, reqData, token) => {
        const response = await axios.post(API_URL, reqData, configAuth(token))
        return response.data[0]
    },

    getPublicItem: async (API_URL) => {
        const response = await axios.get(API_URL)
        return response.data[0]
    },

    getFirstItem: async (API_URL, token) => {
        const response = await axios.get(API_URL, configAuth(token))
        return response.data[0]
    },

    deleteField: async (API_URL, fieldKey, token) => {
        const response = await axios.delete(API_URL + fieldKey, configAuth(token))
        return response.data[0]
    },

    createMultiData: async (postData, token) => {
        const responses = await postData.map(collection => {
            return axios.post(collection.API, collection.data, configAuth(token))
        })
        const responseData = await axios.all(responses);
        return {
            data1: responseData[0].data,
            data2: responseData[1].data
        }
    },

    getData: async (API_URL, token) => {
        const response = await axios.get(API_URL, configAuth(token))
        return response.data
    },

    getUserData: async (API_URL, userID, token) => {
        const response = await axios.get(API_URL, configAuth(token))
        const data = await response.data;
        // const userData = data.filter(item => item.userID === userID)
        // return userData
		return data
    },

    getMultiData: async (API_URLS, token) => {
        const responses = await API_URLS.map(url => axios.get(url, configAuth(token)))
        const responseData = await axios.all(responses);
        return {
            data1: responseData[0].data,
            data2: responseData[1].data
        }
    },

    deleteItem: async (API_URL, id, token) => {
        const response = await axios.delete(API_URL + id, configAuth(token))
        return response.data
    },

    updateItems: async (API_URL, reqData, token) => {
        const response = await axios.put(API_URL + 'many', reqData, configAuth(token))
        return response.data
    },

    updateValue: async (API_URL, reqData, token) => {
        const { id, reqBody } = reqData;
        const response = await axios.patch(API_URL + id, reqBody, configAuth(token))
        return response.data
    },

    updateItem: async (API_URL, reqData, token) => {
        const { id, reqBody } = reqData;
        const response = await axios.post(API_URL + id, reqBody, configAuth(token))
        return response.data
    },

    getImages: async (API_URL, token, collection) => {
        const response = await axios.get(API_URL, configAuth(token))
        const imagesData = await response.data;
		if(collection === 'invoices') {
			sessionStorage.setItem('imageIds', JSON.stringify(imagesData))
		}
        return imagesData
    },

    uploadImageToCloudinary: async (API_URL, imageData, token) => {
        const { api, reqData, setPercentage } = imageData;
        const response = await axios.post(API_URL + api, reqData, configWUpdateUI(token, setPercentage))
		const imageResponseData = await response.data;
        return imageResponseData
    },

    uploadImageToInventory: async (API_URL, imageData, token) => {
        const { reqData, setPercentage } = imageData;
        const response = await axios.post(API_URL, reqData, configWUpdateUI(token, setPercentage))
		const imageResponseData = await response.data;
        return imageResponseData
    },

	generateOpenAIImage: async (API_URL, imageData, token) => {
		const { reqData, setPercentage } = imageData;
		const response = await axios.post(API_URL, reqData, configWUpdateUI(token, setPercentage))
		const imageResponseData = await response.data;
		return imageResponseData
	},

	getMetalsData: async (API, metals, token) => {
		const response = await axios.post(API, metals, configAuth(token))
		return response.data
	}
}

export default httpRequests;
