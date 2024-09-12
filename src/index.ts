import express from 'express';
import { setupSwagger } from '../swagger';
import bodyParser from 'body-parser';
import routes from './routes';
import connectToDatabase from './infra/db/mongoose';

const app = express();
setupSwagger(app);

app.use(bodyParser.json()); // Para analisar JSON
app.use(bodyParser.urlencoded({ extended: true })); // Para analisar dados de formulário

const startServer = async () => {
  await connectToDatabase(); // Conectar ao MongoDB Atlas
}

// Rotas
app.use('/api', routes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

startServer();