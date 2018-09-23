import { AppLoading, Font } from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from '../App';
import configureStore from './configureStore';

import { imageAssets, cacheImages } from './images';
import fontAssets from './fonts';

export default class Setup extends Component {
  static async loadAssetsAsync() {
    const cachedImageAssets = cacheImages(imageAssets);
    await Promise.all([...cachedImageAssets]);

    await Font.loadAsync(fontAssets);
  }

  constructor() {
    super();
    const { store, persistor } = configureStore();
    this.state = {
      store,
      persistor,
      isReady: false
    };
  }

  render() {
    const { isReady, store, persistor } = this.state;

    if (!isReady) {
      return (
        <AppLoading
          startAsync={Setup.loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }
    return (
      <Provider store={store}>
        <PersistGate loading={<AppLoading />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}
