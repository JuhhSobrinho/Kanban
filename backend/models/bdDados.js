const { db } = require('../config/firebaseConfig.js');

const fetchUserData = async () => {
  try {
    const querySnapshot = await db.collection('id-user').get();
    console.log('Número de documentos:', querySnapshot.size);

    const userData = [];

    for (const doc of querySnapshot.docs) {
      const projectName = doc.id;
      const statusData = doc.data();

      if (!statusData) {
        console.log('statusData is undefined');
        continue; // Continue para o próximo documento
      }

      const statusArray = Object.keys(statusData).map((titulo) => ({
        titulo,
        tasks: statusData[titulo],
      }));


      userData.push({
        projectName,
        status: statusArray,
      });
    }

    console.log('userDataResolved:', userData);

    return userData;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

module.exports = { fetchUserData };
