import client from "~/boot/client";

export default async function (id) {
  if (!id) return {}

  const response = await client.get(`/users/${id}`);

  return response.data;
}
