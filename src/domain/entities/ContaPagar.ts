export class ContaPagar {
  id: string;
  descricao: string;
  valor: number;
  dataVencimento: Date;
  statusPagamento: 'PENDENTE' | 'PAGO';
  boletoPdfUrl: string;

  constructor(
    id: string,
    descricao: string,
    valor: number,
    dataVencimento: Date,
    boletoPdfUrl: string,
  ) {
    this.id = id;
    this.descricao = descricao;
    this.valor = valor;
    this.dataVencimento = dataVencimento;
    this.boletoPdfUrl = boletoPdfUrl;
    this.statusPagamento = 'PENDENTE';
  }

  pagarConta(): void {
    this.statusPagamento = 'PAGO';
  }
}
