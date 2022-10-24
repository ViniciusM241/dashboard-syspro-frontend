import types from "./types";

export function changeNavStatus() {
  return (dispatch, getState) => {
    const currentStatus = getState().navbar.navStatusMode;
    let navStatusMode = 'opened';

    if (currentStatus === 'opened') {
      navStatusMode = 'collapsed';
    }
    else if (currentStatus === 'collapsed') {
      navStatusMode = 'closed';
    }

    return dispatch({ type: types.CHANGE_NAV_STATUS, payload: { navStatusMode }});
  }
}
