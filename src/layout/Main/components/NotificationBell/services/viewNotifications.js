import client from "~/boot/client";

export default async function (notifications) {
  const response = await client.patch(`/notifications/view`, notifications);

  return response.status === 200;
}
