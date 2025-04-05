import express from 'express';

import defaultRouter from './default.router.js';
import defaultV2Router from './default.V2.router.js';
import inicioRouter from './inicio.router.js';
import nuevaRutaRouter from './nueva-ruta.router.js';
import productRouter from './products.router.js';
import usersRouter from './users.router.js';
import categoriesRouter from './categories.router.js';

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use('/', defaultRouter);
  router.use('/nueva-ruta', nuevaRutaRouter);
  router.use('/inicio', inicioRouter);
  router.use('/products', productRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);

  const router2 = express.Router();
  app.use("/api/v2", router2);
  router2.use('/', defaultV2Router);

}

export default routerApi;
