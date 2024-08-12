import express from 'express';
import request from 'requests';
import cors from 'cors';
import router from './routes/index.js';
import { PORT } from './utils/constants.js';

const app = express();

app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/login`);
});
