import dotenv from 'dotenv'
dotenv.config()
import cloudinaryV2 from '../config/cloudinary.js'

const getSID = async (pid) => {
    const idArray = await pid.replace('invoice-images/', '').split('_');
    const baseID = idArray[0];
    const secondaryID = ['wax', '1', '2', '3', '4'].includes(idArray[1]) ? idArray[1] : '';
    return secondaryID ? `${baseID}_${secondaryID}` : baseID;
}

const cloudinaryControllers = {

    getCloudinaryData: async ({ res, filter, max }) => {

        const { resources } = await cloudinaryV2.search
            .expression(filter)
            .sort_by('public_id', 'desc')
            .max_results(max)
            .execute();

        const publicIds = [];
        for (const resource of resources) {
            const imageData = {
                pid: await resource.public_id,
                id: await getSID(resource.public_id)
            }
            publicIds.push(imageData)
        }
        res.send(publicIds)
    },

    uploadCloudinaryData: async ({res, dataUrl, pid, folder, msgSuccess}) => {
        try {
            await cloudinaryV2.uploader.upload(dataUrl, {
                public_id: pid,
                folder
            });
            res.json({ msg: msgSuccess, pid })
        } catch (err) {
            res.status(500)
            throw new Error(err)
        }
    },

    uploadCloudinaryAvatar: async ({res, dataUrl, pid, folder, msgSuccess}) => {
        try {
            await cloudinaryV2.uploader.upload(dataUrl, {
                public_id: pid,
                folder
            });
            return { msg: msgSuccess, pid }
        } catch (err) {
            res.status(500)
            throw new Error(err)
        }
    }
};

export default cloudinaryControllers;
