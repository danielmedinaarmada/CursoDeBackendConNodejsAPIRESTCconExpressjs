import express from 'express';
import { faker } from '@faker-js/faker';

const router = express.Router();

//ahora se quita la parte especializada y se sustituye app por router

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

// la ruta más específica (en este caso, /products/filter) esté definida antes
// que la ruta con el parámetro dinámico

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 200,
  });
});

router.post("/", (req, res) => {
  const body = res.body;
  res.json({
    message: 'created',
    data: body,
  })
})


export default router;
