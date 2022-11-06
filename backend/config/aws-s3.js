import dotenv from 'dotenv'
import { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from '../lib/s3.js';
dotenv.config()

const bucket = process.env.AWS_BUCKET_NAME

export const uploadBucketFile = async (res, file, key) => {

    const params = {
        Bucket: bucket,
        Key: key,
        Body: file.data,
    };

    try {
        await s3.send(new PutObjectCommand(params));
        res.json({
            msg: 'File uploaded',
            fileKey: key
        });
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
}

export const getBucketFile = async (res, key) => {

    const params = {
        Key: key,
        Bucket: bucket
    };

    try {
        const data = await s3.send(new GetObjectCommand(params));
        data.Body.pipe(res);
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
}

export const deleteBucketFile = async (res, key) => {

    const params = {
        Bucket: bucket,
        Key: key
    };

    try {
        await s3.send(new DeleteObjectCommand(params));
        res.json({
            msg: 'File deleted',
            fileKey: key
        });
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
}
