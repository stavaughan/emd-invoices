import dotenv from 'dotenv'
import { S3Client } from "@aws-sdk/client-s3";
dotenv.config()

const s3 = new S3Client({
    region: process.env.AWS_REGION
});

export { s3 };
