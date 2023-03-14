import client from "~/boot/client";

export default async function () {
  const response = await client.get(`/users`);

  return response.data.length;
}
