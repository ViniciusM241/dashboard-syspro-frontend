import React from 'react';

import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import colors from '~/utils/colors';

import { Container } from './styles';

function MenuItem({ menu, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();
  const navbarStatus = useSelector(state => state.navbar.navStatusMode);

  return (
    <Container
      onClick={() => navigate(menu.to)}
      selected={menu.to === location.pathname}
      navbarStatus={navbarStatus}
      {...props}
    >
      {
        React.createElement(menu.icon, {
          style: {
            color: colors.MENU_ITEM_COLOR,
            fontSize: '1.8rem',
          }
        })
      }
      {
        navbarStatus === 'opened' && (
          <p className='ml-10'>
            {
              menu.name
            }
          </p>
        )
      }
    </Container>
  );
}

export default MenuItem;
