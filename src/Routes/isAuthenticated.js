import Cookies from 'universal-cookie';

const cookies = new Cookies();
const isAuthenticated = () => {
  cookies.get('token');
  return false;
};

export default isAuthenticated;
