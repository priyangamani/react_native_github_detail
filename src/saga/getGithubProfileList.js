import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constant'
import { call, put, take } from 'redux-saga/effects';
import { getGithubListAPI } from '../api';


function* getProfileResultList() {
   const action = yield take(FETCHING_DATA);
   const params = action.payload;
   try {
      const data = yield call(getGithubListAPI, params);
      yield put({ type: FETCHING_DATA_SUCCESS, data });
   }
   catch (e) {
      yield put({ type: FETCHING_DATA_FAILURE })
   }
}


export default getProfileResultList




