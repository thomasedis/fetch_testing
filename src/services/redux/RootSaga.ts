import { all, AllEffect, ForkEffect, takeLatest } from 'redux-saga/effects';
import { getSectionsRequest } from './home/HomeReducers';
import { getSectionsSagas } from './home/HomeSagas';

function* RootSaga(): Generator<AllEffect<ForkEffect<void>>> {
  return yield all([
    // home
    takeLatest(getSectionsRequest, getSectionsSagas),
  ]);
}

export default RootSaga;
