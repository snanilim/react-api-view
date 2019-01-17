const fetch = require('node-fetch');
const { resMsg } = require('../../helper/resMsg');

exports.logIn = async (req, res, next) => {
  const { body: data } = req;
  try {
    const url = 'http://localhost:4000/v1/auth/login';
    const body = JSON.stringify(data);
    const headers = { 'Content-Type': 'application/json' };
    const response = await fetch(url, { method: 'POST', body, headers });
    const resData = await response.json();
    console.log('resData', resData);
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    console.log('error-----', error);
    return next(error);
  }
};
