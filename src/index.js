import dotenv from 'dotenv';
dotenv.config();

import { initMongoConnection } from './db/initMongoConnection.js';
import app from './server.js';

const PORT = process.env.PORT || 4000;

process.on('uncaughtException', () => {
  process.exit(1);
});

process.on('unhandledRejection', () => {});

// const bootstrap = async () => {
//   try {
//     await initMongoConnection();
//     app.listen(PORT);
//   } catch {
//     process.exit(1);
//   }
// };
const bootstrap = async () => {
  try {
    await initMongoConnection();

    console.log('JWT_ACCESS_SECRET:', process.env.JWT_ACCESS_SECRET);
    console.log('JWT_REFRESH_SECRET:', process.env.JWT_REFRESH_SECRET);
    console.log('NODE_ENV:', process.env.NODE_ENV);

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error('Bootstrap error:', err);
    process.exit(1);
  }
};
bootstrap();
