import { HoldingModel } from './mongoose/HoldingSchema';
import { IHoldingRepository } from '../../domain/repositories/IHoldingRepository';
import { Holding } from '../../domain/entities/Holding';

export class HoldingRepository implements IHoldingRepository {
  findAll(): Promise<Holding[]> {
    throw new Error('Method not implemented.');
  }
  update(id: string, holdingData: Partial<Holding>): Promise<Holding | null> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async save (holdingData: any): Promise<any> {
    const holding = new HoldingModel(holdingData);
    return holding.save();
  }

  async findById (id: string): Promise<any> {
    return HoldingModel.findById(id);
  }
}
