import client from "~/boot/client";

export default async function (ibgeId) {
  const response = await client.get(`/utils/migrations/city/${ibgeId}/establishments`);

  return response.data;
}
