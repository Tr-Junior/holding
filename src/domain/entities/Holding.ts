import { EntidadeOperacional } from './EntidadeOperacional';

export class Holding {
  id: string;
  nome: string;
  dataCriacao: Date;
  entidadesOperacionais: EntidadeOperacional[];

  constructor(
    id: string,
    nome: string,
    entidadesOperacionais: EntidadeOperacional[],
  ) {
    this.id = id;
    this.nome = nome;
    this.dataCriacao = new Date();
    this.entidadesOperacionais = entidadesOperacionais;
  }
}
