import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-height: 750px;

  /* overflow-y: scroll;
  overflow-x: visible; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 10px;
`;
