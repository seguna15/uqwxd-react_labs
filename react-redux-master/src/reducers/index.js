import {combineReducers} from 'redux';

const counter = (state=0,action) => {
    if(action.type === 'INCREMENT'){
        //this will increase the value passed to the increment method
        return state+action.inc;
    }

    //Returns the current value of the counter
    return state;
};

const myReducers = combineReducers({counter});

export default myReducers;