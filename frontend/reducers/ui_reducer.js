import { combineReducers } from 'redux';
import modalReducer from './modals_reducer';

export default combineReducers({
    modal: modalReducer,
});