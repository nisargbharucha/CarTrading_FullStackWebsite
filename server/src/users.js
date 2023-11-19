import express from 'express';
import connection from './database.js';
import authenticateJWT from './auth.js';
import jwt from 'jsonwebtoken';

const router = express.Router();
router.use(express.json());


router.post('/register', async (req, res) => {
    const { username, password, email, firstname, lastname, location } = req.body;
    
    // Simple validation
    if (!username || !password || !email || !firstname || !lastname) {
      return res.status(400).send('Please provide all required fields.');
    }
    
    try {
      // Check if user or email already exists
      const [users] = await connection.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);
      if (users.length > 0) {
        return res.status(409).send('Username or email already exists.');
      }
  
      // Insert new user
      await connection.query('INSERT INTO users (username, password, email, firstname, lastname, location, createdAt) VALUES (?, ?, ?, ?, ?, ?, NOW())', [username, password, email, firstname, lastname, location]);
      
      res.status(201).send('User registered successfully.');
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error.');
    }
  });
  
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send('Please provide a username and password.');
    }
    
    try {
      // Check if user exists
      const [rows] = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
      if (rows.length > 0) {
        const user = rows[0];
        if (user.password === password) {  // Assuming plaintext passwords for simplicity, but hashing is recommended
          // User is authenticated, return userId
          res.json({ message: 'Logged in successfully', userId: user.userId });
        } else {
          res.status(401).send('Invalid credentials');
        }
      } else {
        res.status(401).send('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).send('Server error');
    }
  });

  export default router;