const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const config = require('config');
const log = require('debug')('log:app');

const resError = require('../helper/resError');
const winston = require('./winston');

const app = express();

log(config.get('app_key'));

// app.use(winston.info);
app.use(helmet());
app.use(morgan('combined', { stream: winston.end }));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Point static path to dist
app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));


app.use(function(req, res, next) {
    const route = path.join(__dirname, '..', '..', 'dist', 'index.html');
    res.sendFile(route);
})


app.use(resError.notFound);
app.use(resError.errorHandler);

module.exports = app;
