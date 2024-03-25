import React from "react";
import { useSelector } from "react-redux";
import useBreakpoints from "~/hooks/useBreakpoints";
import useMenu from "~/hooks/useMenu";

import logo from '~/assets/logo.png';
import MenuItem from './components/MenuItem';

import { Container, MenuContainer } from './styles'
import colors from "~/utils/colors";

function NavContainer() {
  const breakpoints = useBreakpoints();
  const menus = useMenu();
  const navbarStatus = useSelector(state => state.navbar.navStatusMode);

  return (
    <Container breakpoints={breakpoints} className={navbarStatus}>
      {
        navbarStatus !== 'closed' && (
          <>
            <img src={logo} />
            <MenuContainer className="mt-20">
              {
                menus.map((menuGroup, index) => (
                  <div key={index} className="mb-20">
                    {
                      menuGroup.title && (
                        <p style={{ color: colors.MENU_ITEM_COLOR, paddingLeft: '5px' }}>{menuGroup.title}</p>
                      )
                    }
                    {
                      menuGroup.menus.map((menu, index) => (
                        <MenuItem key={index} menu={menu} />
                      ))
                    }
                  </div>
                ))
              }
            </MenuContainer>
          </>
        )
      }
    </Container>
  );
}

export default NavContainer;
