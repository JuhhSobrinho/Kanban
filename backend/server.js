const { fetchUserData } = require('./models/bdDados.js');

const express = require('express');
const cors = require('cors');
const handler = express();
const port = process.env.PORT || 3000;

handler.use(cors());

handler.get('/api/data', async (req, res) => {
  try {
    const userData = await fetchUserData();
    res.json(userData);
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

module.exports = { handler };
