import { Router } from 'express';
import { HoldingController } from '../controllers/HoldingController';
import { HoldingRepository } from '../infra/db/HoldingRepository';
import { RegistrarHoldingUseCase } from '../useCases/registrarHolding/RegistrarHoldingUseCase';
import { ListHoldingUseCase } from '../useCases/registrarHolding/ListHoldingUseCase';

// Configuração dos repositórios e casos de uso
const holdingRepository = new HoldingRepository();
const registrarHoldingUseCase = new RegistrarHoldingUseCase(holdingRepository);
const listHoldingUseCase = new ListHoldingUseCase(holdingRepository);
// Configuração do controller
const holdingController = new HoldingController(registrarHoldingUseCase, listHoldingUseCase);

const router = Router();

// Definição das rotas
router.post('/holdings', (req, res) =>
  holdingController.registerHolding(req, res),
);
router.get('/holdings', (req, res) =>
  holdingController.listHoldings(req, res)
);

export default router;
