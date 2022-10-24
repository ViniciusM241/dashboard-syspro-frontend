import React from "react";
import { useLocation } from "react-router-dom";

import NavContainer from "../NavContainer";
import Main from "../Main";

import { StyledContainer } from './styles';

function Container({ children }) {
  const location = useLocation();

  if (location.pathname === '/login') return children;

  return (
    <StyledContainer>
      <NavContainer />
      <Main>
        {children}
      </Main>
    </StyledContainer>
  );
}

export default Container;
