const express = require('express');
const connection = require('./connection.js'); 

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/insecure', async (req, res) => {
  try {
    const [rows] = await connection.promise().query('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  } 
});

app.listen(port, () => console.log(`Listen in port ${port}`));