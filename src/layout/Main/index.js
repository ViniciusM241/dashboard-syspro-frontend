import React from "react";
import { useDispatch } from "react-redux";
import { changeNavStatus } from "../NavContainer/store/actions";
import useBreakpoints from "~/hooks/useBreakpoints";

import Profile from './components/Profile';
import NotificationBell from './components/NotificationBell';
import { Col, Container, Inline, Row } from "~/components";
import { MenuOutlined } from '@ant-design/icons';
import { Container as StyledContainer } from './styles';

function Main({ children }) {
  const dispatch = useDispatch();
  const breakpoints = useBreakpoints();

  return (
    <StyledContainer>
      <Container>
        <Row>
          <Col cols={10} xs={12}>
            <MenuOutlined
              onClick={() => dispatch(changeNavStatus())}
              style={{
                fontSize: '1.5rem'
              }}
            />
          </Col>
          {
            !breakpoints.xs && (
              <Col cols={2}>
                <Inline right>
                  <NotificationBell />
                  <Profile className='ml-20' />
                </Inline>
              </Col>
            )
          }
        </Row>
        {children}
      </Container>
    </StyledContainer>
  );
}

export default Main;
