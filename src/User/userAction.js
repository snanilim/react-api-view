import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const createUser = (name, email, address, password, role, status) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    const cookieValue = cookies.get('token');
    try {
      const response = await axios({
        method: 'post',
        url: '/v1/user',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
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
      console.log('response', response.data.token.accessToken);
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

export const editUser = (email, password, props) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });

    try {
      const response = await axios({
        method: 'post',
        url: '/v1/auth/login',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ email, password }),
      });
      dispatch({
        type: 'LOGIN_SUCCESS',
        token: response.token,
        user: response.user,
        messages: Array.isArray(response.msg) ? response.msg : [response.msg],
      });
      return props.history.push('/dashboard');
    } catch (error) {
      return dispatch({
        type: 'LOGIN_FAILURE',
        messages: error,
      });
    }
  };
};
