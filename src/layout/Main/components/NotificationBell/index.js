import React from "react";

import { MdNotifications } from "react-icons/md";
import { Container, NotificationsCount } from './styles';
import colors from "~/utils/colors";

function NotificationBell() {

  return (
    <Container>
      <MdNotifications
        style={{
          fontSize: '1.2rem',
          color: colors.MAIN_FONT_COLOR,
        }}
      />
      <NotificationsCount>
        5
      </NotificationsCount>
    </Container>
  );
}

export default NotificationBell;
