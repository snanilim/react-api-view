import Login from './Auth/components/Login';
import Signup from './Auth/components/Signup';
import Account from './Auth/components/Account';


const routes = [
  {
    path: "/login",
    exact: true,
    component: Login,
    isAuthenticated: false,
  },
  {
    path: "/signup",
    exact: true,
    component: Signup,
    isAuthenticated: false,
  },
  {
    path: "/account",
    exact: true,
    component: Account,
    isAuthenticated: true,
  }
];

export default routes;
