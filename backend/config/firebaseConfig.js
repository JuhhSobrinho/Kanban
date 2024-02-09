const { initializeApp } = require("firebase-admin");
const { getFirestore, collection, getDocs } = require('firebase-admin/firestore');


const serviceAccountPath = '/var/task/config/config/kanban-2c325-firebase-adminsdk-4zoqj-97c0f300be.json';

const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountPath),
  databaseURL: 'https://kanban-2c325.firebaseio.com'
});

// Get a reference to the Firestore database
const db = admin.firestore();

// Export the database reference for use in other modules
module.exports = { db };