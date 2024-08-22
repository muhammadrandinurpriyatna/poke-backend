const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1, temp;
    
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    
    return b;
  }
  

app.post('/rename', (req, res) => {
  const { baseName, count } = req.body;
  if (!baseName || count === undefined) {
    return res.status(400).json({ message: 'baseName and count are required' });
  }
  const newName = `${baseName}-${fibonacci(count)}`;
  res.json({ newName });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Rename service running on port ${PORT}`);
});