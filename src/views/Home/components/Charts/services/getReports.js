import client from "~/boot/client";
import filtersToString from "~/utils/filtersToString";

export default async function({ department, filters }) {
  const res = await client.get(`/reports?dashboard=${department}${filters ? filtersToString(filters) : ''}`);

  return res.data;
}
