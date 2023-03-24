import client from "~/boot/client";

export default async function (id) {
  const response = await client.delete(`/posts/${id}`);

  return response.status === 200;
}
