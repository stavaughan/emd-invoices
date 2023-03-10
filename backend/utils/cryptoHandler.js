import dotenv from 'dotenv'
dotenv.config()
import crypto from 'crypto';

export const encrypt = async (res, dataString) => {
    const algorithm = 'aes-256-ctr';
    const iv = crypto.randomBytes(16);
    const ivec = Buffer.from(iv);
    const secret = process.env.CRYPTO_SECRET;
    try {
        const cipher = crypto.createCipheriv(
            algorithm,
            Buffer.from(secret),
            ivec
        );
        const encryptedData = Buffer.concat([
            cipher.update(dataString),
            cipher.final(),
        ]);
        return {
            iv: ivec.toString("hex"),
            dataString: encryptedData.toString("hex"),
        };
    } catch (error) {
        res.status(401).send({ message: `Error! failed to encrypt data` })
    }
};

export const decrypt = async (res, encryptedData) => {
    const algorithm = 'aes-256-ctr';
    try {
        const decipher = crypto.createDecipheriv(
            algorithm,
            Buffer.from(process.env.CRYPTO_SECRET),
            Buffer.from(encryptedData.iv, "hex")
        );
        const decryptedPassword = Buffer.concat([
            decipher.update(Buffer.from(encryptedData.dataString, "hex")),
            decipher.final(),
        ]);
        const pwString = decryptedPassword.toString();
        return pwString;
    } catch (err) {
        res.status(401).send({ message: `Error! failed to decrypt data` })
    }
};
