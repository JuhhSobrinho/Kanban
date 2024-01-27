// app.js
const {collection, getDocs, getDoc, doc } = require('firebase/firestore');


const { db } = require('./config/firebaseConfig.js');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const querySnapshot = await db.collection('id-user').get();
    const data = querySnapshot.docs.map(doc => doc.data());
    
    res.json(data);
    
    
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
