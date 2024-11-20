const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue dans le Service Utilisateurs');
});

app.listen(3001, () => {
  console.log('Service Utilisateurs en écoute sur le port 3001');
});
