const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/capture', (req, res) => {
  const isCaptured = Math.random() < 0.5;
  res.json({ success: isCaptured });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Capture service running on port ${PORT}`);
});