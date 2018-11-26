import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookieValue = cookies.get('token');

export const createUser = (name, email, address, password, role, status) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'post',
        url: '/v1/user',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          name,
          email,
          address,
          password,
          role,
          status,
        }),
      });
      // console.log('response', response.data.token.accessToken);
      return dispatch({
        type: 'CREATE_USER_SUCCESS',
        messages: Array.isArray(response.msg) ? response.msg : [response.msg],
      });
    } catch (error) {
      return dispatch({
        type: 'CREATE_USER_FAILURE',
        messages: error,
      });
    }
  };
};

export const users = () => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: '/v1/user',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return dispatch({
        type: 'USERS_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'USERS_FAILURE',
        messages: error,
      });
    }
  };
};

export const getOneUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: `/v1/user/${userId}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return dispatch({
        type: 'ONE_USER_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'ONE_USER_FAILURE',
        messages: error,
      });
    }
  };
};

export const toogleDrwer = (value) => {
  return async (dispatch) => {
    return dispatch({
      type: 'TOOGLE_DRAWER',
      visible: value,
    });
  };
};
