import {combineReducers} from 'redux';
import UsersReducer from './reduce_users';
import ActiveUserReducer from './activated_user_reducer';
import RemoveItemReducer from './remove_item';


const allReducers = combineReducers({
    users: UsersReducer,
    activeUser: ActiveUserReducer,
    deleteItem: RemoveItemReducer,
});

export default allReducers;
