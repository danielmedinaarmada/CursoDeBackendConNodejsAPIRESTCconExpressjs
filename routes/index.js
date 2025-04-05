import defaultRouter from './default.router.js';
import inicioRouter from './inicio.router.js';
import nuevaRutaRouter from './nueva-ruta.router.js';
import productRouter from './products.router.js';
import usersRouter from './users.router.js';
import categoriesRouter from './categories.router.js';

function routerApi(app) {
  app.use('/', defaultRouter);
  app.use('/nueva-ruta', nuevaRutaRouter);
  app.use('/inicio', inicioRouter);
  app.use('/products', productRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}

export default routerApi;
