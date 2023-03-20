import client from "~/boot/client";

export default async function (id) {
  const response = await client.get(`/posts/${id}`);

  return response.data;
}
