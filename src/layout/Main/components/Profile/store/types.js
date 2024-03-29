import createTypes from "~/utils/createTypes";
import async from "~/utils/async";

export default createTypes('PROFILE', [
  ...async('GET_PROFILE'),
  ...async('GET_DEPARTMENTS'),
  ...async('GET_NOTIFICATIONS'),
  'SET_DEPARTMENT',
]);
