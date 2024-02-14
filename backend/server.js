const { fetchUserData } = require('./models/bdDados.js');

const handler = async (event) => {
  try {
    const userData = await fetchUserData();
    return {
      statusCode: 200,
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro interno no servidor' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};

module.exports = { handler };
