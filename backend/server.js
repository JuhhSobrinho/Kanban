// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const { fetchUserData } = require('./models/bdDados.js');

const handler = async (event, res) => {
  try {
    const userData = await fetchUserData();
    res.json(userData);
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}

module.exports = { handler }