import express from 'express';
import ProductsService from '../services/product.service.js';

const router = express.Router();
const service = new ProductsService();

//ahora se quita la parte especializada y se sustituye app por router

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

// la ruta más específica (en este caso, /products/filter) esté definida antes
// que la ruta con el parámetro dinámico

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  try {
    const body = req.body;
    const product = service.updated(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json( {
      id,
      message: error.message
    });
  }
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  try {
    const body = req.body;
    const product = service.updated(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      id,
      message: error.message
    });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  try {
    const respuesta = service.delete(id);
    res.json(respuesta);
  } catch (error) {
    res.status(404).json({
      id,
      message: error.message
    });
  }
});

export default router;
