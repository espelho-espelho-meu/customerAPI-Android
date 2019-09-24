const express = require('express');

const app = express();
const mongoose = require('mongoose');
const api = require('./api/api');
const config = require('./config/config');

// mongoose.connect(config.db.url, { useNewUrlParser: true }, (err, client) => {
//   if (err) {
//     console.log('Error occured while connecting to mongoDB Atlas...', err);
//   }
// });
// mongoose.set('useCreateIndex', true);

// require('./middleware/appMiddleware')(app);

app.use('/api', api);

app.use((req, res) => {
  res.status(404).json({ code: '404', message: 'Nothing to do here!' });
});

app.use((error, req, res) => {
  const err = {
    errorMsg: error.message,
  };
  res
    .status(500)
    .json({ code: '500', message: `Internal server error: ${err.errorMsg}` });
});

module.exports = app;
