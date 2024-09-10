export class Relatorio {
  id: string;
  tipo: 'CONTA_RECEBER' | 'CONTA_PAGAR';
  filtrosAplicados: any;
  dados: any[];

  constructor(
    id: string,
    tipo: 'CONTA_RECEBER' | 'CONTA_PAGAR',
    filtrosAplicados: any,
    dados: any[],
  ) {
    this.id = id;
    this.tipo = tipo;
    this.filtrosAplicados = filtrosAplicados;
    this.dados = dados;
  }

  exportarRelatorio(formato: 'PDF' | 'WORD'): string {
    return `Relatório exportado em ${formato}`;
  }
}
