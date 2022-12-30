import client from "~/boot/client";

export default async function (id, department) {
  const response = await client.patch(`/departments/${id}`, department);

  return response.status === 204;
}
