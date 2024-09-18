import { Holding } from '../entities/Holding';

export interface IHoldingRepository {
  save(holding: Holding): Promise<Holding>;
  findById(id: string): Promise<Holding | null>;
  // update(id: string, holdingData: Partial<Holding>): Promise<Holding | null>;
  findAll(): Promise<Holding[]>;
  // delete(id: string): Promise<void>;
}
