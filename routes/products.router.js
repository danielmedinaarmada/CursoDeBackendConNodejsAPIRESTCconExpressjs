import express from 'express';
import ProductsService from '../services/product.service.js';
import validatorHandler from '../middlewares/validator.Handler.js';
import {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
} from '../schemas/product.schema.js';

const router = express.Router();
const service = new ProductsService();

//ahora se quita la parte especializada y se sustituye app por router

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

// la ruta más específica (en este caso, /products/filter) esté definida antes
// que la ruta con el parámetro dinámico

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  },
);

router.put(
  '/:id',
  validatorHandler(getProductSchema, 'body'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const body = req.body;
      const product = await service.updated(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const body = req.body;
      const product = await service.updated(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const respuesta = await service.delete(id);
    res.json(respuesta);
  } catch (error) {
    next(error);
  }
});

export default router;
