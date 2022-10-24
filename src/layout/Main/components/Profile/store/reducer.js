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
  types.GET_PROFILE,
);

const stopLoading = combineActions(
  types.GET_PROFILE_SUCCESS,
  types.GET_PROFILE_FAIL,
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
    [types.GET_PROFILE_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      user: data,
    }),
  },
  INITIAL_STATE
);

export default reducer;
