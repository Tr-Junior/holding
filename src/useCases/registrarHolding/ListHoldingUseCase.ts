import { IHoldingRepository } from '../../domain/repositories/IHoldingRepository';
import { Holding } from '../../domain/entities/Holding';

export class ListHoldingUseCase {
  constructor(private holdingRepository: IHoldingRepository) {}

  async execute(): Promise<Holding[]> {
    return this.holdingRepository.findAll();
  }
}
