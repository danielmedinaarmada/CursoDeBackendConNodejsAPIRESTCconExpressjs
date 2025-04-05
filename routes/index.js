import productRouter from ('./products.router');
import usersRouter from ('./users.router');
import categoriesRouter from ('./categories.router');

function routerApi(app) {
  app.use('/products', productRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}

export default routerApi;
