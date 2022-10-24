import styled from "styled-components";

export const Container = styled.div`
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;

  overflow: hidden;
  border-collapse: separate;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
`;

export const Rows = styled.tbody`
  width: 100%;
`;

export const EmptyTable = styled.div`
  width: 100%;
  background-color: #FFF;
  padding: 20px 0;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
