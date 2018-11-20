import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookieValue = cookies.get('token');

export const createCost = (name, value) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'post',
        url: '/v1/cost',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
        data: JSON.stringify({
          name,
          value,
        }),
      });
      // console.log('response', response.data.token.accessToken);
      return dispatch({
        type: 'CREATE_COST_SUCCESS',
        messages: Array.isArray(response.msg) ? response.msg : [response.msg],
      });
    } catch (error) {
      return dispatch({
        type: 'CREATE_COST_FAILURE',
        messages: error,
      });
    }
  };
};

export const costs = () => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: '/v1/cost',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
      });
      return dispatch({
        type: 'COSTS_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'COSTS_FAILURE',
        messages: error,
      });
    }
  };
};

export const getOneCost = (costId) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: `/v1/cost/${costId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
      });
      return dispatch({
        type: 'ONE_COST_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'ONE_COST_FAILURE',
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
