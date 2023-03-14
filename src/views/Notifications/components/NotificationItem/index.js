import React, { useState } from "react";
import getDateDiff from "~/utils/getDateDiff";
import viewNotifications from "../../services/viewNotifications";

import {
  Container,
  Head,
} from './styles';

function NotificationItem({ notification, props }) {
  const [viewed, setViewed] = useState(!!notification['users.notificationUsers.viewed']);

  const handleNotificationClick = async () => {
    await viewNotifications([notification.id]);

    setViewed(true);

    if (notification.link) {
      window.open(notification.link, '_blank');
    }
  };

  return (
    <Container {...props} {...notification} viewed={viewed} onClick={handleNotificationClick}>
      <Head>
        <p className="title">{notification.title}</p>
        <p className="date">{getDateDiff(notification.createdAt)}</p>
      </Head>
      <p className="message">{notification.message}</p>
    </Container>
  );
}

export default NotificationItem;
