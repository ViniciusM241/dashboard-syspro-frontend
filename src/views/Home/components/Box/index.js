import React from 'react';

import { Container, Title, Content } from './styles';

function Box({ children, title, ...props }) {

  return (
    <Container {...props}>
      {
        title && (
          <Title className='mb-10'>
            {title}
          </Title>
        )
      }
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export default Box;
