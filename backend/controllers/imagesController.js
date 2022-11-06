import asyncHandler from 'express-async-handler'
import Contact from '../models/app/contactModel.js'
import User from '../models/app/userModel.js'
import Business from '../models/invoices/businessModel.js'
import cloudinaryControllers from './cloudinaryControllers.js'
import collectionsLogic from './collectionsLogic.js'
import { compileUser } from './usersLogic.js'
import getters from '../lib/getters.js'

const IMAGE_SIZE = {
    '1MB': 1048576,
    '2MB': 2097152,
    '5MB': 5242880
};

const maxImageSize = '5MB';
const imageTooLargeMsg = `Image too large. Make sure image is less than ${maxImageSize}`;

const { updateCollection } = collectionsLogic;

const getUserContacts = async (res, userID, contactID, avatarID) => {
    const user = await User.findById(userID)
    const updatedContact = await updateCollection(res, Contact, contactID, { avatarID })
    const userContact = compileUser(user, updatedContact);
    return userContact;
};

const imagesController = {

    /**
     * @desc Get Invoices images ID's
     * @route GET /api/images/invoices
     * @access Private
     */
    getInvoiceImages: asyncHandler(async (req, res) => await cloudinaryControllers.getCloudinaryData({
        res,
        filter: 'folder: invoice-images',
        max: 250
    })),

    /**
     * @desc Upload invoice image
     * @route POST /api/images/invoices
     * @access Private
     */
    uploadInvoiceImage: asyncHandler(async (req, res) => {

        const data = await req.body
        const nameArr = data.name.split(' ')

        const dname = nameArr[1] ? nameArr[0] + nameArr[1] : nameArr[0];
        const name = getters.getName(dname, 5)

        const MAX_SIZE = IMAGE_SIZE[maxImageSize];

        const size = Number(data?.size);
        if (size > MAX_SIZE) {
            res.status(401).send({ message: imageTooLargeMsg })
        }

        try {
            const uploadedImage = await cloudinaryControllers.uploadCloudinaryData({
                res,
                dataUrl: data.url,
                pid: name,
                folder: 'invoice-images',
                msgSuccess: `Success! Invoice image ${name} has been uploaded succesfully.`
            });
            return uploadedImage
        } catch (error) {
            res.status(401).send({ message: 'Image couldn\'t be uploaded at this time.' })
        }
    }),

    /**
     * @desc Get inventory images ID's
     * @route GET /api/images/inventory
     * @access Private
     */
    getInventoryImages: asyncHandler(async (req, res) => {
        try {
            const images = await cloudinaryControllers.getCloudinaryData({
                res,
                filter: 'folder: inventory',
                max: 200
            })
            res.status(200).json(images)
        } catch (error) {
            res.status(401).send({ message: 'Image Id\'s couldn\'t be uploaded at this time.' })
        }
    }),

    /**
     * @desc Upload inventory image
     * @route POST /api/images/inventory
     * @access Private
     */
    uploadInventoryImage: asyncHandler(async (req, res) => {

        const data = req.body;
        const name = getters.getName(data.name, 5)

        const size = Number(data?.size);

        if (size > maxImageSize) {
            res.status(401).send({ message: imageTooLargeMsg })
        }

        try {
            const uploadedImage = await cloudinaryControllers.uploadCloudinaryData({
                res,
                dataUrl: data.url,
                pid: name,
                folder: 'inventory',
                msgSuccess: `Success! Inventory item image ${name} has been uploaded.`
            });
            res.status(200).json(uploadedImage)
        } catch (error) {
            res.status(401).send({ message: 'Image couldn\'t be uploaded at this time.' })
        }
    }),

    /**
     * @desc Upload avatar image
     * @route POST /api/images/avatars
     * @access Private
     */
    uploadAvatarImage: asyncHandler(async (req, res) => {

        const data = req.body;
        const avatarID = getters.getName(data.name, 5);
        const userID = data?.userID || '';

        const size = Number(data?.size);

        if (size > maxImageSize) {
            res.status(401).send({ message: imageTooLargeMsg })
        }

        if (data?.id !== 'new') {
            await updateCollection(res, Contact, data.id, { avatarID })
        }

        try {
            if(userID) {
                const uploadedImage = await cloudinaryControllers.uploadCloudinaryAvatar({
                    res,
                    dataUrl: data.url,
                    pid: avatarID,
                    folder: 'profile-images',
                    msgSuccess: `Success! Avatar ${avatarID} has been uploaded.`
                });
                const userContact = await getUserContacts(res, userID, data.id, avatarID);
                res.status(200).json({
                    ...uploadedImage,
                    ...userID && { userContact }
                })
            } else {
                await cloudinaryControllers.uploadCloudinaryData({
                    res,
                    dataUrl: data.url,
                    pid: avatarID,
                    folder: 'profile-images',
                    msgSuccess: `Success! Avatar ${avatarID} has been uploaded.`
                });
            }

        } catch (error) {
            res.status(401).send({ message: 'Image couldn\'t be uploaded at this time.' })
        }
    }),

    /**
 * @desc Upload business logo
 * @route POST /api/images/logos
 * @access Private
 */
    uploadBusLogo: asyncHandler(async (req, res) => {

        const data = req.body;
        const logoID = getters.getName(data.name, 5);

        const size = Number(data?.size);

        if (size > maxImageSize) {
            res.status(401).send({ message: imageTooLargeMsg })
        }

        if (data?.id !== 'new') {
            await updateCollection(res, Business, data.id, { logoID })
        }

        try {
            const uploadedImage = await cloudinaryControllers.uploadCloudinaryData({
                res,
                dataUrl: data.url,
                pid: logoID,
                folder: 'app-images',
                msgSuccess: `Success! Business logo ${logoID} has been uploaded.`
            });
            res.status(200).json(uploadedImage)
        } catch (error) {
            res.status(401).send({ message: 'Image couldn\'t be uploaded at this time.' })
        }
    })
}

export default imagesController
