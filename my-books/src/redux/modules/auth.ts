import { createActions, handleActions } from "redux-actions";

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
export function* authSaga() {}
export default reducer;
