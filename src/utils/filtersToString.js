export default function filtersToString(filters) {
  return "&filters=" + encodeURI(JSON.stringify(filters));
}
