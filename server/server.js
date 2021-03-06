require('dotenv').config();
const config = require('config');
const log = require('debug')('log:http');
const http = require('http');

const app = require('./settings/app');

http.createServer(app).listen(config.get('port'), () => {
  log(`Server start on port ${config.get('port')}`);
});
