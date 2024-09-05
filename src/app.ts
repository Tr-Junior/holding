import express from 'express';
import { setupSwagger } from './swagger';

const app = express();

setupSwagger(app);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
  console.log('Documentação da API disponível em http://localhost:3000/api-docs');
});
