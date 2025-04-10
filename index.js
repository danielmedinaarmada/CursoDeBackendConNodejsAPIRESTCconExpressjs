import express from 'express';
import cors from 'cors';
import routerApi from './routes/index.js';
import {
  logErrors,
  errorHandler,
  boomErrorHandler,
} from './middlewares/error.handler.js';

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = [
  'http://localhost:3000',
  'http://localhost:8080',
  'http://127.0.0.1:5500',
  'https://myapp.com',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      console.log("origin", origin);
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
