import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    user: [
      {
        id: '001',
        name: 'Daniel Medina',
        img: '/categories/danielmedina',
        preferencias: [
          { id: '001', name: 'Terror', img: '/categories/terror' },
          { id: '002', name: 'Drama', img: '/categories/drama' },
          { id: '003', name: 'Comic', img: '/categories/comic' },
        ],
      },
    ],
  });
});

export default router;
