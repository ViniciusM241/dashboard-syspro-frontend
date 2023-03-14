import client from "~/boot/client";

export default async function (data) {
  const response = await client.post(`/notifications`, data);

  return response.status === 201;
}
