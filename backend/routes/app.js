
const { fetchUserData } = require('../models/bdDados.js');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Configurar o middleware cors globalmente
app.use(cors());

app.get('/api/data', async (req, res) => {
  try {
    const userData = await fetchUserData();
    res.json(userData);
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
