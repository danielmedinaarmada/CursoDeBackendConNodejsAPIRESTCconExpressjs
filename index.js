import express from 'express';
import routerApi from './routes/index.js';
const app = express();
const port = 3000;

routerApi(app);

app.get('/', (req, res) => {
  res.send('Esta es mi app en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

app.get('/inicio', (req, res) => {
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

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
