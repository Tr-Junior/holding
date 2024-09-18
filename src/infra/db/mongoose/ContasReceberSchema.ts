import { Schema, model } from 'mongoose';

const ContaReceberSchema = new Schema({
  holdingId: { type: Schema.Types.ObjectId, ref: 'Holding', required: true },
  descricao: { type: String, required: true },
  dataEmissao: { type: Date, required: true },
  valor: { type: Number, required: true },
  statusPagamento: {
    type: String,
    enum: ['PENDENTE', 'PAGO'],
    default: 'PENDENTE',
  },
  dataRecebimento: { type: Date },
});

export const ContaReceberModel = model('ContaReceber', ContaReceberSchema);
