import { EntidadeOperacional } from "../../domain/entities/EntidadeOperacional";

export interface RegistrarHoldingDTO {
  id?: string;
  nome: string;
  entidadesOperacionais: EntidadeOperacional[];
  dataCriacao: Date;
  }
  