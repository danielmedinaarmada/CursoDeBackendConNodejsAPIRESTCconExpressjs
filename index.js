import express from 'express';
import routerApi from './routes/index.js';
const app = express();
const port = 3000;

routerApi(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
