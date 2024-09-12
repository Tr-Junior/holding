import { Request, Response } from 'express';
import { RegistrarHoldingUseCase } from '../useCases/registrarHolding/RegistrarHoldingUseCase';
import { RegistrarHoldingDTO } from '../useCases/registrarHolding/RegistrarHoldingDTO';

export class HoldingController {
  constructor(private registrarHoldingUseCase: RegistrarHoldingUseCase) {}

  async registerHolding(req: Request, res: Response): Promise<void> {
    try {
      const dto: RegistrarHoldingDTO = req.body;
      await this.registrarHoldingUseCase.execute(dto);
      res.status(201).send({ message: 'Holding registrada com sucesso.' });
    } catch (error) {
      res.status(500).send({ error: 'Erro ao registrar a holding.' });
    }
  }
}
