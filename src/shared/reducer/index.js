import { combineReducers } from 'redux';
import messages from '../../Others/messagesReducer';
import auth from '../../Auth/authReducer';
import user from '../../User/userReducer';
import material from '../../Material/materialReducer';
import cost from '../../Cost/costReducer';
import generator from '../../Generator/generatorReducer';

export default combineReducers({
  messages,
  auth,
  user,
  material,
  cost,
  generator,
});
