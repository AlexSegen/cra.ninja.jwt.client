  
import { combineReducers } from 'redux'

import {counterReducer} from './counter'
import {authReducer} from './auth'
import {registerReducer} from './register'

import { notesReducer } from './notes'

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    register: registerReducer,
    notes: notesReducer
});

export default rootReducer;