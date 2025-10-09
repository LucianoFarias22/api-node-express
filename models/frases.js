import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class frasesModel{
    async create(frase){
        const colFrases = dbClient.db.collection('frases');
        return await colFrases.insertOne(frase);
    }

    async update(id, frase){
        const colFrases = dbClient.db.collection('frases');
        return await colFrases.updateOne({_id: new ObjectId(id)}, {$set: frase});
    }

    async delete(id){
        const colFrases = dbClient.db.collection('frases');
        return await colFrases.deleteOne({_id: new ObjectId(id)});
    }

    async getAll(){
        const colFrases = dbClient.db.collection('frases');
        return colFrases.find({}).toArray();
    }

    async getOne(id){
        const colFrases = dbClient.db.collection('frases');
        return colFrases.findOne({_id: new ObjectId(id)});
    }
}

export default new frasesModel;