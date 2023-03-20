import React from 'react';

import Dashboard from './components/Dashboard';
import { T1, Row, Col } from '~/components';
import { Container } from './styles';

function Home() {

  return (
    <Container>
      <Row className="mt-10">
        <Col cols={12}>
          <T1>
            Dashboardd
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
