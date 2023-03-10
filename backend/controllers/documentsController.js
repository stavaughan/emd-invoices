import asyncHandler from 'express-async-handler'
import fileUpload from './fileUpload.js'

const documentsController = {

    /**
     * @desc DELETE document file from AWS S3
     * @route DELETE /api/document-files/:id
     * @access Private
     */
    deleteFile: asyncHandler(async (req, res) => await fileUpload.deleteS3File(req, res)),

    /**
     * @desc Get document file from AWS S3
     * @route GET /api/document-files/:id
     * @access Private
     */
    getFile: asyncHandler(async (req, res) => await fileUpload.getS3File(req, res)),

    /**
     * @desc Upload new document to AWS S3
     * @route POST /api/document-files/
     * @access Private
     */
    upLoadFile: asyncHandler(async (req, res) => await fileUpload.upLoadS3File(req, res))
}

export default documentsController
