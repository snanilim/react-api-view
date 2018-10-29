import express from "express";
import cors from "cors";
import path from 'path';
import logger from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import exphbs from'express-handlebars';
import jwt from'jsonwebtoken';

import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import configureStore from "../app/shared/store/configureStore";
import App from "../app/shared/App";
import "source-map-support/register";

// Load environment variables from .env file
dotenv.load();

const app = express();


var hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    ifeq: function(a, b, options) {
      if (a === b) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    toJSON : function(object) {
      return JSON.stringify(object);
    }
  }
});


app.use(cors());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('public')));
app.use(express.static(path.join('dist')));
// app.use(express.static("public"));



// --------------------------- User ---------------------------

// --------------------------- User ---------------------------


app.use(function(req, res, next) {
  var initialState = {
    auth: { token: req.cookies.token, user: req.user },
    messages: {}
  };

  var store = configureStore(initialState);
    const context = {};
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    );

    var initialData = store.getState();

    res.render('layouts/main', {
      markup: markup,
      initialData: initialData
    });
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Server Start On Port ' + app.get('port'));
});

export default app;