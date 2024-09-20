import { HoldingModel } from './mongoose/HoldingSchema';
import { IHoldingRepository } from '../../domain/repositories/IHoldingRepository';
import { Holding } from '../../domain/entities/Holding';

export class HoldingRepository implements IHoldingRepository {
  async findAll(): Promise<Holding[]> {
    const holdings = await HoldingModel.find();
    return holdings.map(holding => holding.toObject() as unknown as Holding);
  }

  async update(id: string, holdingData: Partial<Holding>): Promise<Holding | null> {
    const updatedHolding = await HoldingModel.findByIdAndUpdate(id, holdingData, { new: true });
    return updatedHolding ? (updatedHolding.toObject() as unknown as Holding) : null;
  }  

  async delete(id: string): Promise<void> {
    await HoldingModel.findByIdAndDelete(id);
  }

  async save(holding: Holding): Promise<Holding> {
    const holdingModel = new HoldingModel(holding);
    const savedHolding = await holdingModel.save();
    return savedHolding.toObject() as unknown as Holding;
  }

  async findById(id: string): Promise<Holding | null> {
    const holding = await HoldingModel.findById(id);
    return holding ? (holding.toObject() as unknown as Holding) : null;
  }
}
