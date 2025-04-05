import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

export default router;
