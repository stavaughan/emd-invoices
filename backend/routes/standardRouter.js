import express from 'express'
import requestControllers from '../controllers/requestControllers.js';
import { protect } from '../middleware/authMiddleware.js'

const {
    getItem,
    getItems,
    setItem,
    setItems,
    updateItem,
    updateMany,
    deleteItem
} = requestControllers;

const standardRouter = express.Router();

standardRouter.route('/')
    .get(protect, getItems)
    .post(protect, setItem);

standardRouter.route('/:id')
    .get(protect, getItem)
    .patch(protect, updateItem)
    .delete(protect, deleteItem);

standardRouter.route('/many')
    .post(protect, setItems)
    .put(protect, updateMany);

export default standardRouter
