import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Get Request hotels Page');
});

export default router;
