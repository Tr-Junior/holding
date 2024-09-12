import { Schema, model } from 'mongoose';

const HoldingSchema = new Schema({
  nome: { type: String, required: true },
  entidadesOperacionais: [{
    nome: { type: String, required: true },
    cnpj: { type: String, required: true }
  }],
  dataCriacao: { type: Date, default: Date.now }
});

export const HoldingModel = model('Holding', HoldingSchema);
