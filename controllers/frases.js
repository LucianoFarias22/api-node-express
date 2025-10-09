import frasesModel from '../models/frases.js'
class frasesController{
    constructor(){

    }

    async create(req, res){
        try {
            const data = await frasesModel.create(req.body);
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async update(req, res){
        try {
            const {id} = req.params;
            const data = await frasesModel.update(id, req.body);
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async delete(req, res){
        try {
            const {id} = req.params;
            const data = await frasesModel.delete(id);
            res.status(206).json(data)
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async getAll(req, res){
        try {
            const data = await frasesModel.getAll();
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async getOne(req, res){
        try {
            const {id} = req.params;
            const data = await frasesModel.getOne(id);
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new frasesController();