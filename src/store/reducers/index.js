  
import { combineReducers } from 'redux'

import {counterReducer} from './counter'
import {authReducer} from './auth'
import {registerReducer} from './register'

import { notesReducer } from './notes'

import { usersReducer } from './users'

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    register: registerReducer,
    notes: notesReducer,
    users: usersReducer
});

export default rootReducer;