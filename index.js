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

const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)) {
      callback("", true)
    } else {
      callback(new Error ("No permitido"))
    }
  },
};
const whitelist = [

  'https://myapp.com',
];

app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
