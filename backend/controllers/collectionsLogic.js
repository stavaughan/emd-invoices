import messages from '../utils/messages.js'
import permissions from '../config/permissions.js'

const { collections, users } = messages.controllers;

const collectionsLogic = {
    findByID: async (res, Collection, id) => {
        try {
            const item = await Collection.findById(id)
            return item
        } catch (error) {
            res.status(401).send({ message: collections.idNotFoud(id) });
        }
    },

    findByField: async (res, Collection, field, value) => {
        try {
            const item = await Collection.findOne({[field]: value })
            return item
        } catch (error) {
            res.status(401).send({ message: collections.fieldNotFound(field) });
        }
    },

    updateCollection: async (res, Collection, reqID, reqBody) => {
        await collectionsLogic.findByID(res, Collection, reqID)
        try {
            const updatedItem = await Collection.findByIdAndUpdate(reqID, reqBody, { new: true })
            return updatedItem
        } catch (error) {
            res.status(401).send({ message: collections.updateError });
        }
    },

    validateUserRole: (res, userRole) => {
        const approvedRoles = permissions.map(_ => _.role);
        if(!approvedRoles.includes(userRole)) {
            res.status(403).send({ message: users.roleNotAuthorized(userRole) })
        }
    }
}

export default collectionsLogic;
