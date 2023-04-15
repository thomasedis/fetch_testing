import { put, call } from 'redux-saga/effects';
import { getSections } from '@services/api/HomeApis';

import { handleError } from '@services/api/Client';
import { getSectionsFailure, getSectionsSuccessed } from './HomeReducers';

export function* getSectionsSagas(): any {
  try {
    // fake calls api to get data
    const response: any = yield call(getSections);

    if (response.status === 200) {
      yield put(getSectionsSuccessed(response.data));
    } else {
      yield put(getSectionsFailure());
      handleError('');
    }
  } catch (error: any) {
    yield put(getSectionsFailure());
    handleError('');
  }
}
