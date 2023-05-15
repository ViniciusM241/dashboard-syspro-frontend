import styled from "styled-components";

export const UFContainer = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  border-radius: 3px;
  transition: all .2s linear;

  .uf-container {
    padding: 5px 0;
  }

  .uf-container:hover {
    background-color: #FAFAFA;

    .label strong {
      text-decoration: underline;
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
