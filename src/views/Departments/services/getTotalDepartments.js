import client from "~/boot/client";

export default async function () {
  const response = await client.get(`/departments`);

  return response.data.length;
}
