const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

app.post('/release', (req, res) => {
  const number = Math.floor(Math.random() * 100);
  if (isPrime(number)) {
    res.json({ success: true, number });
  } else {
    res.json({ success: false, message: 'Failed to release Pokemon' });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Release service running on port ${PORT}`);
});