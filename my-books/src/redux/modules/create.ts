import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; // Redux 상태를 디버깅하는 데 사용되는 도구 모음
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const create = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
