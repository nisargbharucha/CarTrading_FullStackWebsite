import express from 'express';
import authenticateJWT from './auth.js';
import jwt from 'jsonwebtoken';
import router from './users.js';
import carSelectRouter from './carSelect.js'; 
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/select', carSelectRouter);

app.use("/users", router);