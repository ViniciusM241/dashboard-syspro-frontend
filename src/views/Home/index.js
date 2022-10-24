import React from 'react';

import Dashboard from './components/Dashboard';
import { T1, Row, Col } from '~/components';
import { Container } from './styles';

function Home() {

  return (
    <Container>
      <Row>
        <Col cols={12}>
          <T1 className='mt-10'>
            Dashboard
          </T1>
        </Col>
      </Row>
      <Row>
        <Dashboard />
      </Row>
    </Container>
  );
}

export default Home;
