const http = require('http');
const config = require('./server/v1/config/config');
const app = require('./server/v1/server');

app.listen(config.port);
