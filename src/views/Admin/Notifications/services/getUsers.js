import client from "~/boot/client";

export default async function () {
  const response = await client.get(`/users/search`);

  return response.data;
}
