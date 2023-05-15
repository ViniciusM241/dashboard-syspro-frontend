import client from "~/boot/client";

export default async function (uf) {
  let filters = ``;

  if (uf) {
    filters = `?filters={"uf": "${uf}"}`;
  }
  const response = await client.get(`/utils/migrations/uf${filters}`);

  return response.data;
}
