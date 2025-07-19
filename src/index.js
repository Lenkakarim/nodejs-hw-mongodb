// import dotenv from 'dotenv';
// dotenv.config();

// import { initMongoConnection } from './db/initMongoConnection.js';
// import app from './server.js';

// const PORT = process.env.PORT || 4000;

// process.on('uncaughtException', () => {
//   process.exit(1);
// });

// process.on('unhandledRejection', () => {});

// const bootstrap = async () => {
//   try {
//     await initMongoConnection();
//     app.listen(PORT);
//   } catch {
//     process.exit(1);
//   }
// };
// const bootstrap = async () => {
//   try {
//     await initMongoConnection();
//     app.listen(PORT, () => {
//       console.log(`Server started on port ${PORT}`);
//     });
//   } catch (err) {
//     console.error('Bootstrap error:', err);
//     process.exit(1);
//   }
// };
// bootstrap();
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

import { initMongoConnection } from './db/initMongoConnection.js';
import app from './server.js';

const PORT = process.env.PORT || 4000;

process.on('uncaughtException', () => {
  process.exit(1);
});

process.on('unhandledRejection', () => {});
const bootstrap = async () => {
  try {
    await initMongoConnection();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error('Bootstrap error:', err);
    process.exit(1);
  }
};
bootstrap();
