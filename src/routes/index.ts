import { Router } from 'express';
import { HoldingController } from '../controllers/HoldingController';
import { HoldingRepository } from '../infra/db/HoldingRepository';
import { RegistrarHoldingUseCase } from '../useCases/registrarHolding/RegistrarHoldingUseCase';

// Configuração dos repositórios e casos de uso
const holdingRepository = new HoldingRepository();
const registrarHoldingUseCase = new RegistrarHoldingUseCase(holdingRepository);

// Configuração do controller
const holdingController = new HoldingController(registrarHoldingUseCase);

const router = Router();

// Definição das rotas
router.post('/holdings', (req, res) => holdingController.registerHolding(req, res));

export default router;
