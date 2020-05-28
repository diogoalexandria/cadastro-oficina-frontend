import { createStore } from 'redux';
import reducerGroups from './reducers';

const store = createStore(reducerGroups);

export default store;