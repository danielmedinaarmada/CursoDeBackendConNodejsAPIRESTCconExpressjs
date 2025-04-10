import express from 'express';

const router = express.Router();

router.get("/", (req,res) => {
  res.send('Esta es mi app en express. by Daniel Medina');
});

export default router;
