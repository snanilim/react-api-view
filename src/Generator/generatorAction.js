import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookieValue = cookies.get('token');

export const createMaterial = (name, weight, value) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'post',
        url: '/v1/material',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
        data: JSON.stringify({
          name,
          weight,
          value,
        }),
      });
      // console.log('response', response.data.token.accessToken);
      return dispatch({
        type: 'CREATE_MATERIAL_SUCCESS',
        messages: Array.isArray(response.msg) ? response.msg : [response.msg],
      });
    } catch (error) {
      return dispatch({
        type: 'CREATE_MATERIAL_FAILURE',
        messages: error,
      });
    }
  };
};

export const materials = () => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: '/v1/material',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
      });
      return dispatch({
        type: 'GENERATOR_MATERIAL_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'GENERATOR_MATERIAL_FAILURE',
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
        type: 'GENERATOR_COSTS_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'GENERATOR_COSTS_FAILURE',
        messages: error,
      });
    }
  };
};

export const getOneMaterial = (materialId) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: `/v1/material/${materialId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
      });
      return dispatch({
        type: 'ONE_MATERIAL_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'ONE_MATERIAL_FAILURE',
        messages: error,
      });
    }
  };
};

export const changePCS = (pisces) => {
  return async (dispatch) => {
    return dispatch({
      type: 'CHANGE_PISCES',
      pisces,
    });
  };
};

export const changeCostValues = (values) => {
  return async (dispatch) => {
    return dispatch({
      type: 'CHANGE_COST_VALUES',
      values,
    });
  };
};

export const addMaterial = (newMaterials) => {
  return async (dispatch) => {
    return dispatch({
      type: 'ADD_REMOVE_MATERIALS',
      materials: newMaterials,
    });
  };
};

export const addCost = (newCosts) => {
  return async (dispatch) => {
    return dispatch({
      type: 'UPDATE_COSTS',
      costs: newCosts,
    });
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
