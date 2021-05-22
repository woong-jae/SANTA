import { combineReducers } from 'redux';

import auth from './auth';
import post from './post';

export const reducers = combineReducers({ auth, post });