import createTypes from "~/utils/createTypes";
import async from "~/utils/async";

export default createTypes('HOME', [
  ...async('GET_USER'),
  'SET_USER',
]);
