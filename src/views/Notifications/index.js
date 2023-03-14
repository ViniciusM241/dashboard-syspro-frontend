import React, { useState, useEffect } from 'react';
import searchNotifications from './services/searchNotifications';

import {
  Container,
  Col,
  T1,
  T3,
  Box,
  Inline,
  Row,
  Check,
} from '~/components';
import NotificationItem from './components/NotificationItem';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [filters, setFilters] = useState({
    sort: 'createdAt',
    order: 'DESC',
  });

  const _searchNotifications = async () => {
    const filtersString = Object.keys(filters).reduce((acc, cur, i) => {
      return acc + `${i === 0 ? '' : '&'}${cur}=${filters[cur]}`;
    }, '');

    const notifications = await searchNotifications(filtersString);

    setNotifications(notifications);
  };

  const handleFiltersChange = (e) => {
    setFilters(state => ({
      ...state,
      [e.target.name]: e.target.checked,
    }));
  };

  useEffect(() => {
    _searchNotifications();
  }, [filters]);

  return (
    <Container>
      <Col cols={12} className="mt-10">
        <T1>Central de notificações</T1>
      </Col>
      <Box className="mt-20">
        <Row>
          <Col cols={3} style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <T3>Filtros</T3>
            <Check name="onlyViewed" label="Somente visualizadas" checked={filters.onlyViewed} onChange={handleFiltersChange} />
          </Col>
          <Col cols={9} style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <T3>Notificações ({notifications.length})</T3>
            <Inline className="mt-10">
              {
                notifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))
              }
            </Inline>
          </Col>
        </Row>
      </Box>
    </Container>
  );
}

export default Notifications;
