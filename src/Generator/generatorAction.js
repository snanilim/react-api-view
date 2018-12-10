import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookieValue = cookies.get('token');

export const createGenerator = (materials, costs, profitPercentage, values, kg, weight, basicinfo) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'post',
        url: '/v1/generator',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
        data: JSON.stringify({
          materials,
          costs,
          profitPercentage,
          values,
          kg,
          weight,
          basicinfo,
        }),
      });
      // console.log('response', response.data.token.accessToken);
      return dispatch({
        type: 'CREATE_GENERATOR_SUCCESS',
        messages: Array.isArray(response.msg) ? response.msg : [response.msg],
      });
    } catch (error) {
      return dispatch({
        type: 'CREATE_GENERATOR_FAILURE',
        messages: error,
      });
    }
  };
};

export const updateGenerator = (generatorId, materials, costs, profitPercentage, values, kg, weight, basicinfo) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'put',
        url: `/v1/generator/${generatorId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
        data: JSON.stringify({
          materials,
          costs,
          profitPercentage,
          values,
          kg,
          weight,
          basicinfo,
        }),
      });
      // console.log('response', response.data.token.accessToken);
      return dispatch({
        type: 'UPDATE_GENERATOR_SUCCESS',
        messages: Array.isArray(response.msg) ? response.msg : [response.msg],
      });
    } catch (error) {
      return dispatch({
        type: 'UPDATE_GENERATOR_FAILURE',
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

const getAllMaterials = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: '/v1/material',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookieValue}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getAllCosts = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: '/v1/cost',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookieValue}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const generators = () => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: '/v1/generator',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
      });
      return dispatch({
        type: 'GENERATOR_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'GENERATOR_FAILURE',
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

export const getOneGenerator = (Id) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: `/v1/generator/${Id}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
      });
      const getMaterials = await getAllMaterials();
      const getCosts = await getAllCosts();
      console.log('getCosts', getCosts);
      return dispatch({
        type: 'ONE_GENERATOR_SUCCESS',
        data: response.data,
        getMaterials,
        getCosts,
      });
    } catch (error) {
      return dispatch({
        type: 'ONE_GENERATOR_FAILURE',
        messages: error,
      });
    }
  };
};

export const basicInfo = (productName, announceNumber, presentValue, dateValue) => {
  return async (dispatch) => {
    return dispatch({
      type: 'CHANGE_BASIC_INFO',
      productName,
      announceNumber,
      presentValue,
      dateValue,
    });
  };
};

export const changePCS = (kg, weight) => {
  return async (dispatch) => {
    return dispatch({
      type: 'CHANGE_PISCES',
      kg,
      weight,
    });
  };
};

export const changeCostValues = (values, profitPercentage) => {
  return async (dispatch) => {
    return dispatch({
      type: 'CHANGE_COST_VALUES',
      values,
      profitPercentage,
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

export const deleteGenerator = (Id) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'delete',
        url: `/v1/generator/${Id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return dispatch({
        type: 'DELETE_GENERATOR_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'DELETE_GENERATOR_FAILURE',
        messages: error,
      });
    }
  };
};

export const toogleDrwer = (value) => {
  return async (dispatch) => {
    return dispatch({
      type: 'TOOGLE_GENERATOR_DRAWER',
      visible: value,
    });
  };
};

export const toogleModal = (value) => {
  return async (dispatch) => {
    return dispatch({
      type: 'TOOGLE_GENERATOR_MODAL',
      visible: value,
    });
  };
};
