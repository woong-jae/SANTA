import { combineReducers } from 'redux';

import auth from './auth';
import post from './post';
import show from './show';
import mypage from './mypage';

export const reducers = combineReducers({ auth, post, show, mypage });