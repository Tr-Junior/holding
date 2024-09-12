import { Schema, model } from 'mongoose';

const RelatorioSchema = new Schema({
  holdingId: { type: Schema.Types.ObjectId, ref: 'Holding', required: true },
  contasReceber: [{
    type: Schema.Types.ObjectId,
    ref: 'ContaReceber',
    required: true
  }],
  dataGeracao: { type: Date, default: Date.now }
});

export const RelatorioModel = model('Relatorio', RelatorioSchema);
