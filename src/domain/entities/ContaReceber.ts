export class ContaReceber {
  id: string;
  holdingId: string;
  descricao: string;
  dataEmissao: Date;
  valor: number;
  statusPagamento: 'PENDENTE' | 'PAGO';
  dataRecebimento?: Date;

  constructor(
    id: string,
    holdingId: string,
    descricao: string,
    dataEmissao: Date,
    valor: number,
  ) {
    this.id = id;
    this.holdingId = holdingId;
    this.descricao = descricao;
    this.dataEmissao = dataEmissao;
    this.valor = valor;
    this.statusPagamento = 'PENDENTE';
  }

  atualizarStatusPagamento(dataRecebimento: Date): void {
    this.statusPagamento = 'PAGO';
    this.dataRecebimento = dataRecebimento;
  }
}
