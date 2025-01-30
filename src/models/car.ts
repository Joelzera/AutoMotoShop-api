import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    id:{type: String},
    nome:{type: String},
    marca:{type: String},
    ano:{type: Number},
    motor:{type: Number},
    modelo:{type: String},
    tipo:{type: String},
    cor:{type: String},
    cambio:{type: String},
    combustivel:{type: String},
    quilometragem:{type: Number},
    preço:{type: Number},
    ativo:{type: Boolean}
})

export = mongoose.model('car', dataSchema)