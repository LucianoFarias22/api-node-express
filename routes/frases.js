import express from 'express';
const route = express.Router();
import fraseController from '../controllers/frases.js'

route.post('/', fraseController.create);
route.get('/:id', fraseController.getOne);
route.get('/', fraseController.getAll);
route.put('/:id', fraseController.update);
route.delete('/:id', fraseController.delete);


export default route;