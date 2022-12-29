import types from "./types";

export function getUserById(id) {
  return async (dispatch) => {
    try {
      const data = await dispatch({
        type: types.GET_USER,
        payload: {
          request: {
            url: `/users/${id}`,
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

export function setUser(user) {
  return { type: types.SET_USER, payload: user };
}
