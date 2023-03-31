import { handleActions } from "redux-actions";
import types from "./types";

const INITIAL_STATE = {
  isLoading: false,
  navStatusMode: 'opened',
  modalOpened: false,
}

const reducer = handleActions(
  {
    [types.CHANGE_NAV_STATUS]: (state, { payload:{ navStatusMode }}) => ({
      ...state,
      navStatusMode
    }),
    [types.SET_MODAL_CLOSED]: (state, { payload:{ modalOpened }}) => ({
      ...state,
      modalOpened,
    }),
    [types.SET_MODAL_OPENED]: (state, { payload:{ modalOpened }}) => ({
      ...state,
      modalOpened,
    }),
  },
  INITIAL_STATE
);

export default reducer;
