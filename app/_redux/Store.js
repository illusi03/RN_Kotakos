import { createStore, combineReducers, applyMiddleware } from 'redux';

import ListKos from '../_reducers/ListKos';
import {logger,promise} from './Middleware'

// this global states
const reducers = combineReducers({
    ListKos
})

const Store = createStore(
  reducers,
  applyMiddleware(promise,logger)
);

export default Store