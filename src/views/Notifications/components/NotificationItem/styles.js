import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 1px;
  padding: 10px 10px;
  border: 1px solid rgba(0, 0, 0, .1);
  border-bottom: none;
  cursor: pointer;
  ${props => !props.viewed ? 'border-left: 3px solid #FCD647;' : ''}

  &:hover {
    background-color: rgba(0, 0, 0, .05);
    border-left-width: 5px;
  }

  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .title {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .date {
    font-size: 12px;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;
