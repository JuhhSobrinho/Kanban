// app.js

const { db } = require('./config/firebaseConfig.js');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const querySnapshot = await db.collection('id-user').get();

    const userData = querySnapshot.docs.map(async (doc) => {
      const projectName = doc.id; // O ID do documento é o nome do projeto

      const statusData = doc.data().status;

      if (!statusData) {
        console.log('statusData is undefined');
        return null; // Retorna nulo para evitar erros adicionais
      }

      const statusArray = Object.keys(statusData).map((titulo) => ({
        titulo,
        tasks: statusData[titulo],
      }));

      return {
        projectName,
        status: statusArray,
      };
    });

    // Aguardar todas as promessas serem resolvidas antes de enviar a resposta
    const userDataResolved = await Promise.all(userData);

    console.log('userDataResolved:', userDataResolved);

    // Filtrar resultados nulos (caso algum tenha sido retornado anteriormente)
    const filteredUserData = userDataResolved.filter(data => data !== null);

    res.json(filteredUserData);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
