import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'admin', 
  database: 'finalproject'
}).promise();
  
 // Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL server as id ' + connection.threadId);
});

// Export the connection
export default connection;