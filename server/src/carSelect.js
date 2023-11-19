import express from 'express';
import connection from './database.js';

const carSelectRouter = express.Router();

carSelectRouter.get('/cars/:type', async (req, res) => {
  const carType = req.params.type;
  
  try {
    const [cars] = await connection.query('SELECT * FROM car WHERE type = ?', [carType]);
    res.json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error.');
  }
});

export default carSelectRouter;
