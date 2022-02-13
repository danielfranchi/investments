import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';

import reducerIndicators from './ducks/indicators/reducer';
import reducerSimulations from './ducks/simulations/reducer';

const createRootReducer = () =>
  combineReducers({
    indicators: reducerIndicators,
    simulations: reducerSimulations,
  });

const store = createStore(createRootReducer(), composeWithDevTools());

export { store };
