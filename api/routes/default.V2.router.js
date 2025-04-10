import express from 'express';

const router = express.Router();

router.get("/", (req,res) => {
  res.send('Esta es mi app en express para la Version 2. by Daniel Medina');
});

export default router;
