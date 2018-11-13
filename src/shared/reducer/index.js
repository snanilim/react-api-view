import { combineReducers } from 'redux';
import messages from '../../Others/messagesReducer';
import auth from '../../Auth/authReducer';
import user from '../../User/userReducer';

export default combineReducers({
  messages,
  auth,
  user,
});
