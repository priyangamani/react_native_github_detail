import { all } from "redux-saga/effects";
import getProfileResultList from "./getGithubProfileList";

function* rootSaga() {
  yield all([
    getProfileResultList()
  ]);
}

export default rootSaga;
