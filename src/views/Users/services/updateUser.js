import client from "~/boot/client";

export default async function (id, user) {
  const response = await client.patch(`/users/${id}`, user);

  return response.status === 204;
}
