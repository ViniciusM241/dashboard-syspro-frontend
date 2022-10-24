import { handleActions, combineActions } from "redux-actions";
import types from "./types";

const INITIAL_STATE = {
  isLoading: false,
  user: {
    userId: '',
    name: '',
    email: '',
    isAdmin: '',
    departmentId: '',
  },
}

const beginLoading = combineActions(
  types.GET_USER,
);

const stopLoading = combineActions(
  types.GET_USER_SUCCESS,
  types.GET_USER_FAIL,
);

const reducer = handleActions(
  {
    [beginLoading]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [stopLoading]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [types.GET_USER_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      user: data,
    }),
  },
  INITIAL_STATE
);

export default reducer;
