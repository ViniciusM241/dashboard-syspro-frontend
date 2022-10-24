import React from 'react';

import { Container, Title, Content } from './styles';

function Box({ children, title, ...props }) {

  return (
    <Container {...props}>
      {
        title && (
          <Title>
            {title}
          </Title>
        )
      }
      {/* <Content> */}
        {children}
      {/* </Content> */}
    </Container>
  );
}

export default Box;
