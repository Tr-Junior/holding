export class Processo {
  id: string;
  campanhaId: string;
  holdingId: string;
  descricao: string;
  datasCriticas: Date[];
  status: 'EM ANDAMENTO' | 'CONCLUIDO';

  constructor(
    id: string,
    campanhaId: string,
    holdingId: string,
    descricao: string,
    datasCriticas: Date[],
  ) {
    this.id = id;
    this.campanhaId = campanhaId;
    this.holdingId = holdingId;
    this.descricao = descricao;
    this.datasCriticas = datasCriticas;
    this.status = 'EM ANDAMENTO';
  }

  atualizarStatus(status: 'EM ANDAMENTO' | 'CONCLUIDO'): void {
    this.status = status;
  }
}
