import client from "~/boot/client";

export default async function (id, data) {
  const response = await client.patch(`/posts/${id}`, data);

  return response.status === 200;
}
