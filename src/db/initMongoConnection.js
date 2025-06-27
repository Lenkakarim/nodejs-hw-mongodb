// import mongoose from 'mongoose';

// export const initMongoConnection = async () => {
//   const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } =
//     process.env;

// const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

//   console.log('Новий MONGODB_URI:', uri);

//   try {
//     await mongoose.connect(uri);
//     console.log('Mongo connection successfully established!');
//   } catch (error) {
//     console.error('Mongo connection error:', error.message);
//     throw error;
//   }
// };
import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } =
    process.env;

  console.log(' Перевірка змінних оточення:');
  console.log('MONGODB_USER:', MONGODB_USER);
  console.log(
    'MONGODB_PASSWORD:',
    MONGODB_PASSWORD ? '(приховано)' : 'undefined',
  );
  console.log('MONGODB_URL:', MONGODB_URL);
  console.log('MONGODB_DB:', MONGODB_DB);

  if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_URL || !MONGODB_DB) {
    console.error(
      ' Одна або кілька змінних оточення не задані. Перевір файл .env або налаштування на Render.',
    );
    process.exit(1);
  }

  const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

  console.log(' Сформовано MongoDB URI:', uri);
  try {
    await mongoose.connect(uri);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Mongo connection error:', error.message);
    throw error;
  }
};
