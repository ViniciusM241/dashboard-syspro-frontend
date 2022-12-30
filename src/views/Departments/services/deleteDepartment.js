import client from "~/boot/client";

export default async function (id) {
  const response = await client.delete(`/departments/${id}`);

  return response.status === 204;
}
