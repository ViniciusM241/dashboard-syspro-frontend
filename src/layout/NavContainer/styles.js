import styled from "styled-components";

export const Container = styled.nav`
  min-height: 100vh;
  width: 0;
  padding : 15px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${
   (props) => props.breakpoints.xs ?
    `width: 0;`
   :
    `
      &.opened {
        width: 15%;
        max-width: 300px;
        min-width: 200px;
      }

      &.collapsed {
        width: 8%;
        max-width: 100px;
      }
    `
  }

  transition: all .2s ease;
`;

export const MenuContainer = styled.div`
  width: 100%;
  padding: 0 10px;
`;
