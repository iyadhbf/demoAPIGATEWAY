const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue dans le Service Commandes');
});

app.listen(3003, () => {
  console.log('Service Commandes en écoute sur le port 3003');
});
