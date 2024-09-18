import { Schema, model } from 'mongoose';

const ContaPagarSchema = new Schema({
  descricao: { type: String, required: true },
  codigoBarras: { type: String, required: true },
  dataVencimento: { type: Date, required: true },
  valor: { type: Number, required: true },
  statusPagamento: {
    type: String,
    enum: ['PENDENTE', 'PAGO'],
    default: 'PENDENTE',
  },
  boletoPdf: { type: String },
  dataPagamento: { type: Date },
});

export const ContaPagarModel = model('ContaPagar', ContaPagarSchema);
