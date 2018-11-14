const fetch = require('node-fetch');
const { resMsg } = require('../../helper/resMsg');

exports.createUser = async (req, res, next) => {
  const { body: data } = req;
  const { headers: token } = req;
  try {
    const url = 'http://localhost:4000/v1/user';
    const body = JSON.stringify(data);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token.authorization,
    };
    const response = await fetch(url, { method: 'POST', body, headers });
    const resData = await response.json();
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    return next(error);
  }
};

exports.users = async (req, res, next) => {
  const { headers: token } = req;
  try {
    const url = 'http://localhost:4000/v1/user';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token.authorization,
    };
    const response = await fetch(url, { method: 'GET', headers });
    const resData = await response.json();
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    return next(error);
  }
};

exports.getOneUser = async (req, res, next) => {
  const { headers: token } = req;
  const { params } = req;
  try {
    const url = `http://localhost:4000/v1/user/${params.userID}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token.authorization,
    };
    const response = await fetch(url, { method: 'GET', headers });
    const resData = await response.json();
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    return next(error);
  }
};
