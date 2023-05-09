import { createActions, handleActions, Action } from "redux-actions";
import { takeEvery, put, call } from "redux-saga/effects";
import { LoginReqType } from "../../types";
import UserService from "../../services/UserService";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}
const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = "my-books/auth";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions<AuthState, string>(
  // handleActions<State, Payload>,
  {
    PENDING: (state) => ({ ...state, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);
/*
JavaScript에서 객체 리터럴을 괄호로 감싸주는 경우, 
해당 객체 리터럴이 하나의 식(expression)으로 처리되기 때문에 해당 객체를 반환하는 함수에서 바로 객체를 반환할 수 있게 됩니다.
따라서 해당 코드에서 PENDING, SUCCESS, FAIL 리듀서 함수를 객체 리터럴을 괄호로 감싸주어 식으로 처리할 수 있게 만들고,
이를 handleActions 함수에 전달하여 각 액션에 대한 리듀서를 처리하고 있습니다.
즉, 이 부분은 객체 리터럴을 반환하는 함수에서 바로 객체를 반환할 수 있게 해주는 문법적인 요소입니다.
*/

//saga
export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });

function* loginSaga(action: Action<LoginReqType>) {
  // Action >> Redux 액션 객체
  try {
    yield put(pending());
    const token: string = yield call(UserService.login, action.payload);
    //localstorage
    yield put(success(token));
    //push
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN")));
  }
}

function* logoutSaga() {}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga); // takeEvery, 액션을 비동기적으로 처리할 때 사용, (액션 타입 문자열 | 액션 타입 배열 , 디스패치될 때 실행할 제너레이터 함수)
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
// takeEvery 함수를 사용하면, 비동기적인 작업을 수행하는 액션 처리기 함수들을 작성할 때, 코드의 가독성과 유지보수성을 높일 수 있습니다.
// 예를 들어, LOGIN 액션이 디스패치될 때마다 loginSaga 함수를 실행하여, 로그인 API를 호출하고, 성공하면 토큰을 저장하고,
// 실패하면 에러 메시지를 출력하는 등의 작업을 수행할 수 있습니다.
export default reducer;
