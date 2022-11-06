import express from 'express'
import requestControllers from '../controllers/requestControllers.js'
import { protect } from '../middleware/authMiddleware.js'
const { getItems, setItem, updateItem, deleteItem } = requestControllers;

const settingsRouter = express.Router();

settingsRouter.route('/').get(getItems).post(protect, setItem)
settingsRouter.route('/:id').put(protect, updateItem).delete(protect, deleteItem)

export default settingsRouter
