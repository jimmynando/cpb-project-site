import { combineReducers } from 'redux';
import financeReducer from './financeReducer';

export default combineReducers({
    finance: financeReducer
})