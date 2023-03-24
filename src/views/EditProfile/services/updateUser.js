import client from "~/boot/client";

export default async function (user) {
  const response = await client.patch(`/profile`, user);

  return response.status === 204;
}
