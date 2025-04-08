import express from 'express';
import cors from 'cors';
import routerApi from './routes/index.js';
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
