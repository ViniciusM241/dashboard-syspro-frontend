import client from "~/boot/client";

export default async function (ibgeId, filters) {
  let filter = `?filters={"type": "${filters.type}", "product": "${filters.product}"}`;
  const response = await client.get(`/utils/migrations/city/${ibgeId}${filter}`);

  return response.data;
}
