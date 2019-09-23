import {applyMiddleware, createStore, combineReducers} from 'redux';
import * as champsData from './data/champions.json'
import * as buffsData from './data/buffs.json';
import {buffsReducer, teamReducer, championsReducer} from './reducers';

let initialState = {
  champions: champsData.default.sort((first, second) => first.level - second.level),
  buffs: buffsData.default,
  team: []
}

let reducer = combineReducers({
  champions: championsReducer,
  buffs: buffsReducer,
  team: teamReducer
});

const copies = (store) => (next) => (action) => {
  if (!store.getState().team.find((element) => action.payload === element.name) || action.type === "REMOVE") next(action);
};

const middleware = applyMiddleware(copies);

let store = createStore(reducer, initialState, middleware);

export default store;
