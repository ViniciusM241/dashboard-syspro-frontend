import client from "~/boot/client";

export default async function (department) {
  const response = await client.post(`/departments`, department);

  return response.status === 201;
}
