// src/useCases/registrarHolding/RegistrarHoldingUseCase.ts

import { IHoldingRepository } from '../../domain/repositories/IHoldingRepository';
import { RegistrarHoldingDTO } from './RegistrarHoldingDTO';
import { Holding } from '../../domain/entities/Holding';

export class RegistrarHoldingUseCase {
  constructor(private holdingRepository: IHoldingRepository) {}

  async execute(dto: RegistrarHoldingDTO): Promise<void> {
    const holding: Partial<Holding> = {
      nome: dto.nome,
      entidadesOperacionais: dto.entidadesOperacionais,
      dataCriacao: new Date(),
    };

    await this.holdingRepository.save(holding as Holding);
  }
}
