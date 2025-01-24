const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Processing data asynchronously
  processData(data, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error processing data');
    }
    res.send(result);
  });
});

function processData(data, callback) {
  // Simulate an asynchronous operation
  setTimeout(() => {
    // Simulate an error condition
    if (data.someProperty === 'invalid') {
      callback(new Error('Invalid data received'), null);
      return;
    }
    const result = { message: 'Data processed successfully' };
    callback(null, result);
  }, 1000);
}