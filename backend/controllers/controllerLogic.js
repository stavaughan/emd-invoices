import messages from '../utils/messages.js'
import collectionsLogic from './collectionsLogic.js'

const msgs = messages.controllers.collections

const controllerLogic = {

    getCollectionItem: async (Collection, req, res) => {
        const reqID = await req.params.id;
        try {
            const collectionItem = await collectionsLogic.findByID(res, Collection, reqID)
            res.status(200).json(collectionItem)
        } catch (err) {
            res.status(401).send({ message: err?._message || err })
        }
    },

    getCollectionItems: async (Collection, req, res) => {
        const collectionResults = await Collection.find();
        try {
            if (collectionResults) {
                res.status(200).json(collectionResults)
            } else {
                res.status(204).json({ message: msgs.noContent })
            }
        } catch (err) {
            res.status(401).send({ message: err?._message || err })
        }
    },

    setNewCollectionItem: async (Collection, testField, req, res) => {
        if (!req.body[testField]) {
            res.status(401).send({ message: msgs.newItem(testField) })
        }
        try {
            const newCollectionItem = await Collection.create(req.body)
            res.status(200).json(newCollectionItem)
        } catch (err) {
            res.status(401).send({ message: err?._message || err })
        }
    },

    setNewCollectionItems: async (Collection, req, res) => {
        if (!req.body?.length) {
            res.status(401).send({ message: msgs.newItems })
        }
        try {
            const newCollectionItems = await Collection.insertMany(req.body)
            res.status(200).json(newCollectionItems)
        } catch (err) {
            res.status(401).send({ message: err?._message || err })
        }
    },

    updateCollectionItem: async (Collection, req, res) => {
        const reqID = req.params.id;
        const reqBody = req.body;
        try {
            const updatedCollectionItem = await collectionsLogic.updateCollection(res, Collection, reqID, reqBody)
            res.status(200).json(updatedCollectionItem)
        } catch (err) {
            res.status(401).send({ message: err?._message || err })
        }
    },

    updateCollectionItems: async (Collection, req, res) => {
        const data = await req.body;
        const ids = await data.map(item => item.id);
        const collectionItemsToUpdate = await Collection.find({ '_id': { $in: ids } });
        if (!collectionItemsToUpdate) {
            res.status(401).send({ message: msgs.updateItems(`${ids.join(',')}`) })
        }
        try {
            let updatedData = []
            for (const id of ids) {
                const documentData = await data.find(item => item.id === id).reqBody;
                const updatedCollectionItem = await Collection.findByIdAndUpdate(id, documentData, { new: true })
                updatedData.push(updatedCollectionItem)
            }
            res.status(200).json(updatedData)
        } catch (err) {
            res.status(401).send({ message: err?._message || err })
        }
    },

    deleteItem: async (res, Collection, reqID) => {
        const result = await Collection.findOneAndRemove({ '_id': reqID }).exec();
        try {
            res.status(200).json({
                id: reqID,
                ids: [],
                message: msgs.deleteItemSuccess(result?._id)
            })
        } catch (err) {
            res.status(401).send({ message: err?._message || err })
        }
    },

    deleteItems: async (res, Collection, ids) => {
        for (const id of ids) {
            await Collection.findOneAndRemove({ '_id': id }).exec();
        }

        try {
            res.status(200).json({
                id: '',
                ids: ids,
                message: msgs.deleteItemsSuccess(ids.join(','))
            })
        } catch (err) {
            res.status(401).send({ message: err?._message || err })
        }
    },

    deleteCollectionItem: async (Collection, req, res) => {
        const reqID = req.params?.id;
        const ids = reqID.split('_');
        try {
            if(ids.length > 1) {
                await controllerLogic.deleteItems(res, Collection, ids)
            } else {
                await controllerLogic.deleteItem(res, Collection, reqID)
            }
        } catch (err) {
            res.status(401).send({ message: err?._message || err })
        }
    }
}

export default controllerLogic
