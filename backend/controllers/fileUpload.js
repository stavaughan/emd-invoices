import dotenv from 'dotenv'
dotenv.config()
import { uploadBucketFile, getBucketFile, deleteBucketFile } from '../config/aws-s3.js'

const fileUpload = {

    deleteS3File: async (req, res) => {

        const fileKey = req.params.id;

        if (!fileKey) {
            res.status(401).send({ message: 'Document not found' })
        }

        await deleteBucketFile(res, fileKey);
    },

    getS3File: async (req, res) => {

        const fileKey = req.params.id;

        if (!fileKey) {
            res.status(401).send({ message: 'Document not found' })
        }

        await getBucketFile(res, fileKey);
    },

    upLoadS3File: async (req, res) => {

        if (req.files === null) {
            res.status(401).send({ message: 'no file was uploaded' })
        }

        const file = req.files.file;
        const fileKey = file.name.replaceAll(' ', '');
        await uploadBucketFile(res, file, fileKey);
    }
}

export default fileUpload
