import { combineReducers } from 'redux';
import messages from '../../Others/messagesReducer';
import auth from '../../apps/Auth/authReducer';
import user from '../../apps/User/userReducer';

export default combineReducers({
  messages,
  auth,
  user,
});
