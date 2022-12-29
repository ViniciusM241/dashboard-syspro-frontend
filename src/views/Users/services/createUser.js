import client from "~/boot/client";

export default async function (user) {
  const response = await client.post(`/users`, user);

  return response.status === 201;
}
