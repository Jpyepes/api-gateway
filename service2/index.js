const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;  // Cambia a 3002 en service2

app.get('/', (req, res) => {
  res.send(`Hello from ${process.env.SERVICE_NAME}`);
});

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});
