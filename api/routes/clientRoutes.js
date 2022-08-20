import express from 'express';
import { getAllClients, createClient, getClientById, updateClientById, deleteClientById } from '../controllers/clientController.js'
import createClientMiddleware from '../middlewares/createClientMiddleware.js';
import updateClientMiddleware from '../middlewares/updateClientMiddleware.js';

const clientRoutes = express.Router();

clientRoutes.route('/clients').get(getAllClients).post(createClientMiddleware ,createClient)
clientRoutes.route('/clients/:id').get(getClientById).put(updateClientMiddleware,updateClientById).delete(deleteClientById);

export default clientRoutes