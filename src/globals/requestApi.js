import axios from 'axios';
import { put, takeEvery, select, call } from 'redux-saga/effects';
import { API } from '../../config';

const API_REQUEST = 'API_REQUEST';

const client = axios.create({ baseURL: API });

const request = async (method = 'post', url, params, config) => {
  try {
    const { data } = await client[method](url, params, config);

    return { payload: data };
  } catch (error) {
    if (error.response) {
      const {
        response: {
          status,
          data: { errors }
        }
      } = error;

      return { error: { errors, status } };
    }

    return { error };
  }
};

/* eslint-disable no-param-reassign */

export const requestApi = (url, params = {}, meta = {}, method, config) => ({
  meta,
  payload: { config, method, params, url },
  type: API_REQUEST
});

export const requestApiSaga = function*() {
  yield takeEvery(API_REQUEST, function*({
    meta,
    payload: { config = {}, method, params, url }
  }) {
    const { headers = {} } = config;

    // Send JWT in the header if user is already logged in
    const auth = yield select(s => s.auth);
    const authorized =
      auth.authorized && auth.authorized.data ? auth.authorized.data : {};
    const jwt = authorized ? authorized.jwt : undefined;
    if (jwt) {
      config.headers = { ...headers, authorization: `Bearer ${jwt}` };
    }

    const { payload, error } = yield call(request, method, url, params, config);

    const type = `${url}_${payload ? 'SUCCEED' : 'FAIL'}`;
    yield put({ error, meta, payload, type });
  });
};
