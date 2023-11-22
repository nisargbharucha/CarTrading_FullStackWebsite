import express from 'express';
import connection from './database.js';

const userList = express.Router();

userList.get('/pro/:userId', async (req, res) => {
  const id = req.params.userId;
  console.log(id);
  try {
    const [carId] = await connection.query('SELECT Car.* FROM Car JOIN Listings ON Car.carId = Listings.carId WHERE Listings.userId = ?;', [id]);
    res.json(carId);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error.');
  }
});

export default userList;
