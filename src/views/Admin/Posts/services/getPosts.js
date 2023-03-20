import client from "~/boot/client";

export default async function (filters) {
  if (!filters) return []

  const response = await client.get(`/posts/search?${filters}`);

  return response.data;
}
