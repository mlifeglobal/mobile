import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { reducer as formReducer } from 'redux-form';

import { CLEAR_STORAGE } from '../globals/clearStorage';

const appReducer = combineReducers({
  form: formReducer
  // Apply all reducers here
});

/* eslint-disable no-param-reassign */
const rootReducer = (state, action) => {
  if (action.type === `${CLEAR_STORAGE}`) {
    Object.keys(state).forEach(key => {
      AsyncStorage.removeItem(`persist:${key}`);
    });
    state = undefined;
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['form']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
