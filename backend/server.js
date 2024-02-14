// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const express = require('express');
const cors = require('cors');
const handler = express();

handler.use(cors());

handler.get(async ()=> {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello wros` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
});

module.exports = { handler }