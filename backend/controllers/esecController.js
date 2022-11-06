import asyncHandler from 'express-async-handler'
import { encrypt, decrypt } from '../utils/cryptoHandler.js'
import collectionsLogic from './collectionsLogic.js'
import Esec from '../models/app/esecModel.js'

const esecController = {

    /**
     * @desc Encrypt and upload user data to esec collection
     * @route POST /api/esec/enc
     * @access Private
     */
    encString: asyncHandler(async (req, res) => {
        const { dataString } = req.body;
        const encryptedData = await encrypt(res, dataString);
        try {
            const newEsecItem = await Esec.create({ ...encryptedData })
            res.status(200).json(newEsecItem?._id)
        } catch (err) {
            res.status(401).send({ message: `failed to fetch encrypted data from the database` })
        }
    }),

    /**
     * @desc Decrypt user data for auth view and destroy
     * @route POST /api/esec/dec
     * @access Private
     */
    decString: asyncHandler(async (req, res) => {
        try {
            const { cid } = req.body;
            const esecItem = await collectionsLogic.findByID(res, Esec, cid)
            const dataStr = await decrypt(res, esecItem);
            const payload = { dataStr, cid }
            res.status(200).json(payload)
        } catch (err) {
            res.status(401).send({ message: `failed to delete encrypted data from the database` })
        }
    }),

    /**
     * @desc Update esec item
     * @route PATCH /api/esec/:id
     * @access Private
     *  */
    updateEsec: asyncHandler(async (req, res) => {
        const { id } = req.params;
        const { dataString } = req.body;
        const encryptedData = await encrypt(res, dataString);
        try {
            const updatedEsecItem = await Esec.findByIdAndUpdate(id, {
                ...encryptedData
            }, { new: true })
            res.status(200).json(updatedEsecItem?._id)
        } catch (err) {
            res.status(401).send({ message: `failed to update encrypted data to the database` })
        }
    }),
}

export default esecController
