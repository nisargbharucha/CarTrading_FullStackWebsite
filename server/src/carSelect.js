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

carSelectRouter.post('/sell', async (req, res) => {
  const { userId, carType, carMake, carModel, carYear, carOdometer, carDescription, carCondition, carPrice, carLocation, carImage  } = req.body;

  const carId = -1;

  console.log(carType, carMake, carModel, carYear, carOdometer, carDescription, carCondition);

  try {
    const [results] = await connection.query(
      'INSERT INTO car (type, make, model, year, odometer, description, carCondition) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [carType, carMake, carModel, carYear, carOdometer, carDescription, carCondition]
    );
  
    console.log('Newly created carId:', results.insertId);
    const carId = results.insertId;
    console.log(carId);

    await connection.query('INSERT INTO listings (userId, carId, price, location) VALUES (?, ?, ?, ?)',
    [userId, carId, carPrice, carLocation])

    await connection.query('INSERT INTO images (carId, fileName, description, imageURL) VALUES (?, ?, ?, ?)',
    [carId,carModel, carDescription, carImage])

    res.status(201).send({ userId, message: 'Car listed successfully.' });
  } catch (error) {
    console.error('Error listing car:', error);
    res.status(500).send('Server error');
  }
});

carSelectRouter.get('/details/:carId', async (req, res) => {
  const carId = req.params.carId;
  console.log(carId);
  try {
    const [results] = await connection.query(`
      SELECT * FROM listings JOIN car ON listings.carId = car.carId JOIN images ON car.carId = images.carId WHERE car.carId = ?`, [carId]);
    res.json(results);
  } catch (err) {
    console.error('Error fetching car data:', err);
    res.status(500).send('Server error');
  }
});

export default carSelectRouter;