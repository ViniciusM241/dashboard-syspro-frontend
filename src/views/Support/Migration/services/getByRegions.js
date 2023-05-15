import client from "~/boot/client";

export default async function () {
  const response = await client.get(`/utils/migrations/regions`);

  return response.data;
}
