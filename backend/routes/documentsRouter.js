import express from 'express'
import documentsController from '../controllers/documentsController.js'
import { protect } from '../middleware/authMiddleware.js'

const { getFile, deleteFile, upLoadFile } = documentsController;

const documentsRouter = express.Router();

documentsRouter.route('/:id')
    .get(protect, getFile)
    .delete(protect, deleteFile);
documentsRouter.route('/').post(protect, upLoadFile)

export default documentsRouter
