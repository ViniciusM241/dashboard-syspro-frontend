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

export function getNotifications() {
  return async (dispatch) => {
    try {
      const data = await dispatch({
        type: types.GET_NOTIFICATIONS,
        payload: {
          request: {
            url: `/notifications`,
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

export function setDepartment(department) {
  console.log('payload', { type: types.SET_DEPARTMENT, payload: { data: department }});
  return { type: types.SET_DEPARTMENT, payload: { data: department }};
}
