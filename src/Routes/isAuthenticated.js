import Cookies from 'universal-cookie';

const cookies = new Cookies();
const isAuthenticated = () => {
  const cookieValue = cookies.get('token');
  if (cookieValue) return true;
  return false;
};

export default isAuthenticated;
