import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      message: 'Parámetros recibidos',
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

export default router;
