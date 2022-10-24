import { handleActions, combineActions } from "redux-actions";
import types from "./types";

const INITIAL_STATE = {
  isLoading: false,
  navStatusMode: 'opened',
}

// const beginLoading = combineActions(
// );

// const stopLoading = combineActions(
// );

const reducer = handleActions(
  {
    // [beginLoading]: (state) => ({
    //   ...state,
    //   isLoading: true,
    // }),
    // [stopLoading]: (state) => ({
    //   ...state,
    //   isLoading: false,
    // }),
    [types.CHANGE_NAV_STATUS]: (state, { payload:{ navStatusMode }}) => ({
      ...state,
      navStatusMode
    }),
  },
  INITIAL_STATE
);

export default reducer;
