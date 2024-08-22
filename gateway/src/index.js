const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(express.json());

app.use(cors());

app.get('/pokemon/capture', async (req, res) => {
  const response = await axios.get('http://capture-service:3001/capture');
  res.json(response.data);
});

app.post('/pokemon/release', async (req, res) => {
  const response = await axios.post('http://release-service:3002/release');
  res.json(response.data);
});

app.post('/pokemon/rename', async (req, res) => {
  const response = await axios.post('http://rename-service:3003/rename', req.body);
  res.json(response.data);
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});