import dotenv from 'dotenv'
dotenv.config()
import asyncHandler from 'express-async-handler'
import api from '../config/api.js'
import controllerLogic from './controllerLogic.js'

const {
    getCollectionItem,
    getCollectionItems,
    setNewCollectionItem,
    setNewCollectionItems,
    updateCollectionItem,
    updateCollectionItems,
    deleteCollectionItem
} = controllerLogic

const reqParams = (req) => {
    const endpoint = req.baseUrl.replace('/api/', '');
    return api.find(_ => _.endpoint === endpoint)
}

const requestControllers = {

    /**
     * @desc Get Item
     * @route POST /api/:endpoint/:id
     * @access Private
     */
    getItem: asyncHandler(async (req, res) => {
        const { Model } = reqParams(req);
        await getCollectionItem(Model, req, res)
    }),

    /**
     * @desc Get Items
     * @route GET /api/:endpoint
     * @access Private
     */
    getItems: asyncHandler(async (req, res) => {
        const { Model } = reqParams(req);
        await getCollectionItems(Model, req, res)
    }),

    /**
     * @desc Set Item
     * @route POST /api/:endpoint
     * @access Private
     */
    setItem: asyncHandler(async (req, res) => {
        const { Model, test } = reqParams(req);
        await setNewCollectionItem(Model, test, req, res)
    }),

    /**
     * @desc Set Items
     * @route POST /api/:endpoint/:many
     * @access Private
     */
    setItems: asyncHandler(async (req, res) => {
        const { Model } = reqParams(req);
        await setNewCollectionItems(Model, req, res)
    }),

    /**
     * @desc Update Item
     * @route PUT /api/:endpoint/:id
     * @access Private
     */
    updateItem: asyncHandler(async (req, res) => {
        const { Model } = reqParams(req);
        await updateCollectionItem(Model, req, res)
    }),

    /**
     * @desc Update Many
     * @route PUT /api/:endpoint/many
     * @access Private
     */
    updateMany: asyncHandler(async (req, res) => {
        const { Model } = reqParams(req);
        await updateCollectionItems(Model, req, res)
    }),

    /**
     * @desc Delete Item
     * @route DELETE /api/:endpoint/:id
     * @access Private
     */
    deleteItem: asyncHandler(async (req, res) => {
        const { Model } = reqParams(req);
        await deleteCollectionItem(Model, req, res)
    })
}

export default requestControllers
