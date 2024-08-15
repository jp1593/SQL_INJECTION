const express = require('express');
const connection = require('./connection.js'); 
const cors = require('cors')

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

app.get('/insecure', async (req, res) => {
  try {
    const [rows] = await connection.promise().query("SELECT * FROM users WHERE name='John Doe'");
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  } 
});

app.listen(port, () => console.log(`Listen in port ${port}`));