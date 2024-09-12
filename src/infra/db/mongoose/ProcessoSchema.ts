import { Schema, model } from 'mongoose';

const ProcessoSchema = new Schema({
  campanhaId: { type: Schema.Types.ObjectId, ref: 'Campanha', required: true },
  status: { type: String, required: true },
  datasCriticas: [{
    descricao: { type: String, required: true },
    data: { type: Date, required: true }
  }]
});

export const ProcessoModel = model('Processo', ProcessoSchema);
