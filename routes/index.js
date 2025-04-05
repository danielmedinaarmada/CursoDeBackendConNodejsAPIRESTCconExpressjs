import defaultRouter from './default.router.js';
import defaultV2Router from './default.V2.router.js';
import inicioRouter from './inicio.router.js';
import nuevaRutaRouter from './nueva-ruta.router.js';
import productRouter from './products.router.js';
import usersRouter from './users.router.js';
import categoriesRouter from './categories.router.js';

function routerApi(app) {
  app.use('/api/', defaultRouter);
  app.use('/api/v2', defaultV2Router);
  app.use('/api/nueva-ruta', nuevaRutaRouter);
  app.use('/api/inicio', inicioRouter);
  app.use('/api/products', productRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/categories', categoriesRouter);
}

export default routerApi;
