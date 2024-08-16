const express = require('express');
const connection = require('./connection.js'); 
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); 
const port = process.env.PORT || 3001;

app.post('/insecure', async (req, res) => {
  try {
    const { name } = req.body;
    const [rows] = await connection.promise().query("SELECT * FROM users WHERE name = '" + name + "'");
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  } 
});

app.post('/secure', async (req, res) => {
    try {
      const { name } = req.body;
      const [rows] = await connection.promise().query("SELECT * FROM users WHERE name = ?", [name])
      res.json(rows);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    } 
  });

app.listen(port, () => console.log(`Listen in port ${port}`));