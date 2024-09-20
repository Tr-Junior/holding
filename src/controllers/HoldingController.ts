import { Request, Response } from 'express';
import { RegistrarHoldingUseCase } from '../useCases/registrarHolding/RegistrarHoldingUseCase';
import { RegistrarHoldingDTO } from '../useCases/registrarHolding/RegistrarHoldingDTO';
import { ListHoldingUseCase } from '../useCases/ListarHolding/ListHoldingUseCase';
import { UpdateHoldingUseCase } from '../useCases/UpdateHolding/UpdateHoldingUseCase';

export class HoldingController {
  constructor(
    private registrarHoldingUseCase: RegistrarHoldingUseCase,
    private listHoldingUseCase: ListHoldingUseCase,
    private updateHoldingUseCase: UpdateHoldingUseCase
  ) {}

  async registerHolding(req: Request, res: Response): Promise<void> {
    try {
      const dto: RegistrarHoldingDTO = req.body;

      // Validação dos dados
      if (!this.isValidRegistrarHoldingDTO(dto)) {
        res.status(400).send({ error: 'Dados inválidos fornecidos.' });
        console.error('Erro ao registrar a holding:', 'Dados inválidos fornecidos'); // Log detalhado para debugging
        return;
      }

      await this.registrarHoldingUseCase.execute(dto);
      res.status(201).send({ message: 'Holding registrada com sucesso.' });

    } catch (error) {
      console.error('Erro ao registrar a holding:', error); // Log detalhado para debugging

      // Tratamento de erros genéricos
      res.status(500).send({ error: 'Erro interno ao registrar a holding.' });
    }
  }

  // Função de validação dos dados (exemplo simples)
  private isValidRegistrarHoldingDTO(dto: unknown): dto is RegistrarHoldingDTO {
    if (typeof dto !== 'object' || dto === null) {
      return false;
    }
  
    const { id, nome, entidadesOperacionais, dataCriacao } = dto as RegistrarHoldingDTO;
  
    // Verifica se `id` (se existir) é uma string
    if (id !== undefined && typeof id !== 'string') {
      return false;
    }
  
    // Verifica se `nome` é uma string
    if (typeof nome !== 'string') {
      return false;
    }
  
    // Verifica se `entidadesOperacionais` é um array e se todos os elementos são objetos com as propriedades corretas
    if (
      !Array.isArray(entidadesOperacionais) ||
      !entidadesOperacionais.every(
        (entidade: unknown) =>
          typeof entidade === 'object' &&
          entidade !== null &&
          typeof (entidade as { nome?: unknown; cnpj?: unknown; descricao?: unknown }).nome === 'string' &&
          typeof (entidade as { cnpj?: unknown }).cnpj === 'string' &&
          typeof (entidade as { descricao?: unknown }).descricao === 'string'
      )
    ) {
      return false;
    }
  
    // Verifica se `dataCriacao` é uma string e pode ser convertida para uma instância de Date (se existir)
    if (dataCriacao !== undefined) {
      if (typeof dataCriacao !== 'string') {
        return false;
      }

      const parsedDate = new Date(dataCriacao);
      if (isNaN(parsedDate.getTime())) {
        return false;
      }
    }
  
    return true;
  }

  async listHoldings(req: Request, res: Response): Promise<void> {
    try {
      const holdings = await this.listHoldingUseCase.execute();
      res.status(200).send(holdings);
    } catch (error) {
      console.error('Erro ao listar holdings:', error); // Log detalhado para debugging
      res.status(500).send({ error: 'Erro interno ao listar holdings.' });
    }
  }


  async updateHolding(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const holdingData = req.body;

    try {
      const updatedHolding = await this.updateHoldingUseCase.execute(id, holdingData);
      res.status(200).json(updatedHolding);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }
}
