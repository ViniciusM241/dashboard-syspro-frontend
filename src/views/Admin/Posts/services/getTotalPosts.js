import client from "~/boot/client";

export default async function () {
  const response = await client.get(`/posts`);

  return response.data.length;
}
