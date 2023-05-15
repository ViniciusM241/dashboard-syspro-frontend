import styled from "styled-components";

export const CitiesContainer = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  border-radius: 3px;
  transition: all .2s linear;

  .city-container {
    padding: 5px 0;
  }

  .city-container:hover {
    background-color: #FAFAFA;

    .label strong {
      text-decoration: underline;
    }
  }
`;
