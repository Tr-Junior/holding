import { IHoldingRepository } from '../../domain/repositories/IHoldingRepository';
import { Holding } from '../../domain/entities/Holding';

export class UpdateHoldingUseCase {
  constructor(private holdingRepository: IHoldingRepository) {}

  async execute(id: string, holdingData: Partial<Holding>): Promise<Holding | null> {
    // Valida os dados antes de atualizar, se necessário
    const updatedHolding = await this.holdingRepository.update(id, holdingData);
    
    if (!updatedHolding) {
      throw new Error('Holding não encontrada.');
    }

    return updatedHolding;
  }
}
