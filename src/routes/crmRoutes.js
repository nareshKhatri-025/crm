import {
    addNewContact,
    getContact,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/connect')
        .get((req, res, next) => {
                //medillware
                console.log(`request from:${req.originalUrl}`)
                console.log(`request type:${req.method}`)

                next()
            },
            //get all contacts

            getContact
        )
        //add new contact
        .post(addNewContact);

    app.route('/connect/:contactID')

    .get(getContactWithID)
        //update specific contact
        .put(updateContact)
        //delete specific contact
        .delete(deleteContact)
}
export default routes;