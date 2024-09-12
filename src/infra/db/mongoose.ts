import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect('', {
    });
    console.log('Conectado ao MongoDB com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Encerra o processo em caso de falha na conexão
  }
};

export default connectToDatabase;
