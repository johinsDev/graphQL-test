const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 5678;

app.listen(5678, () => {
  console.log('Servidor corriendo');
});