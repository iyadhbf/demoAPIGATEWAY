const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue dans le Service Produits');
});

app.listen(3002, () => {
  console.log('Service Produits en écoute sur le port 3002');
});
