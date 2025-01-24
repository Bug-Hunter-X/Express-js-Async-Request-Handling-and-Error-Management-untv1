const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  processData(data)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error(err);
      res.status(err.statusCode || 500).send({ error: err.message });
    });
});

async function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.someProperty === 'invalid') {
        const err = new Error('Invalid data received');
        err.statusCode = 400; 
        reject(err);
        return;
      }
      const result = { message: 'Data processed successfully' };
      resolve(result);
    }, 1000);
  });
}