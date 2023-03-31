import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'modal',
})`
  width: 100%;
  max-width: 800px;
  min-height: 300px;
  padding: 20px 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  background-color: #FFF;
  border-radius: 10px;
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const Button = styled.button`
  border: 0;
  font-size: 15px;
  padding: 5px 10px;
  max-width: 90px;
  border-radius: 3px;
  background-color: #3CA6BC;
  color: #fff;
  cursor: pointer;
  transition: all .2s ease;
  border: 1px solid transparent;
  min-width: 100px;

  &:hover {
    background-color: #fff;
    color: #3CA6BC;
    border-color: #3CA6BC;
  }

  ${({ close }) => {
    if (close)
      return `
        background-color: rgba(0, 0, 0, .6);
        &:hover {
          color: rgba(0, 0, 0, .6);
          border-color: rgba(0, 0, 0, .6);
        }
      `
  }}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  width: 100%;
  gap: 10px;
`;

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, .6);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
`;
