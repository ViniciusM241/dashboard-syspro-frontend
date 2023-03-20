import client from "~/boot/client";

export default async function (data) {
  const response = await client.post(`/posts`, data);

  return response.status === 201;
}
