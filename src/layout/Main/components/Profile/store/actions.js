import types from "./types";

export function getProfile() {
  return async (dispatch) => {
    try {
      const data = await dispatch({
        type: types.GET_PROFILE,
        payload: {
          request: {
            url: `/profile`,
            method: 'GET',
          },
        },
      });

      console.log('payload', data);
    } catch(err) {
      console.log('error', err);
    }
  }
}

export function getDepartments() {
  return async (dispatch) => {
    try {
      const data = await dispatch({
        type: types.GET_DEPARTMENTS,
        payload: {
          request: {
            url: `/departments`,
            method: 'GET',
          },
        },
      });

      console.log('payload', data);
    } catch(err) {
      console.log('error', err);
    }
  }
}
