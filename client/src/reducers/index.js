import { combineReducers } from 'redux';

import auth from './auth';
import post from './post';
import show from './show';

export const reducers = combineReducers({ auth, post, show });