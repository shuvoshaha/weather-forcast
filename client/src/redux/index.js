import { combineReducers } from 'redux';
import { userInfo, User } from './reducer/reducer';

export default combineReducers({
    userinfo: userInfo,
    user: User
}) 