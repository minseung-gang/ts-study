import { all } from "redux-saga/effects";
import { authSaga } from "./auth";
export default function* rootSaga() {
  yield all([authSaga()]); // 하위 사가들을 배열로 넣음
}
