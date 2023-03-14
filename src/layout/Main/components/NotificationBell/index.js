import React, { useRef, useState, useEffect } from "react";
import useOutsideClick from '~/hooks/useOutsideClick';

import {
  T3,
} from '~/components';

import { MdNotifications } from "react-icons/md";
import { Container, NotificationsCount, Collapse, CollapseItem, ClearAll } from './styles';
import colors from "~/utils/colors";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../Profile/store/actions";
import viewNotifications from "./services/viewNotifications";
import getDateDiff from "~/utils/getDateDiff";

function NotificationBell() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.profile.notifications);

  const [isOpened, setIsOpened] = useState(false);
  const [filteredNotifications, setFilteredNotifications] = useState(notifications || []);
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, () => setIsOpened(false));

  useEffect(() => {
    dispatch(getNotifications());

    const interval = setInterval(() => {
      dispatch(getNotifications());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFilteredNotifications(notifications);
  }, [notifications]);

  const handleNotificationClick = async (notification) => {
    await viewNotifications([notification.id]);

    const filtered = filteredNotifications.filter(x => x.id !== notification.id);

    setFilteredNotifications(filtered);

    if (notification.link) {
      window.open(notification.link, '_blank');
    }
  };

  const viewAll = async () => {
    const notificationsToView = filteredNotifications.map(x => x.id);

    setFilteredNotifications([]);

    await viewNotifications(notificationsToView);
  };

  const goToNotifications = () => {
    setIsOpened(false);
    navigate('/notificacoes');
  };

  return (
    <Container ref={wrapperRef}>
      <MdNotifications
        style={{
          fontSize: '1.2rem',
          color: colors.MAIN_FONT_COLOR,
        }}
        onClick={() => setIsOpened(!isOpened)}
      />
      {
        filteredNotifications.length ?
          <NotificationsCount>
            {filteredNotifications.length}
          </NotificationsCount>
        : ''
      }
      {
        isOpened && (
          <Collapse>
            <div className="header">
              <T3>Notificações ({filteredNotifications.length})</T3>
              <ClearAll onClick={() => goToNotifications()}>ver todas</ClearAll>
            </div>
            <div className="body">
              {
                filteredNotifications.length ?
                filteredNotifications.map((notification, index) => (
                  <CollapseItem key={index} onClick={() => handleNotificationClick(notification)}>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                      <p className="title">{notification.title}</p>
                      <p className="date">{getDateDiff(notification.createdAt)}</p>
                    </div>
                    <p className="message">{notification.message}</p>
                  </CollapseItem>
                ))
                : <p className="no-notifications">Nenhuma pendente</p>
              }
            </div>
            <div className="footer">
              <ClearAll onClick={viewAll}>limpar tudo</ClearAll>
            </div>
          </Collapse>
        )
      }
    </Container>
  );
}

export default NotificationBell;
