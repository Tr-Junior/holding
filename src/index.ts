import express from 'express';
import { setupSwagger } from '../swagger';

const app = express();
setupSwagger(app);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
