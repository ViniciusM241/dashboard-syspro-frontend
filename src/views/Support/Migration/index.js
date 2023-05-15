import React, { useEffect, useState } from "react";
import getByRegions from "./services/getByRegions";
import getByUfs from "./services/getByUfs";

import {
  Container,
  Col,
  T1,
  Box,
  T3,
} from '~/components';
import RegionsContainer from './components/RegionsContainer';
import UFContainerByRegion from './components/UFContainerByRegion';

function Migration() {
  const [regions, setRegions] = useState([]);
  const [ufs, setUfs] = useState({});

  const _getByRegions = async () => {
    const data = await getByRegions();
    setRegions(data);
  };

  const _getByUfs = async () => {
    const data = await getByUfs();
    setUfs(data);
  };

  useEffect(() => {
    _getByRegions();
    _getByUfs();
  }, []);

  return (
    <Container>
      <Col cols={12} className="mt-10">
        <T1>Migração BIN ISO</T1>
      </Col>
      <Box className="mt-20">
        <Col cols={12} className="mb-20">
          <T3>Faça o acompanhamento da migração dos cartões Syspro e tome decisões baseadas nas informações abaixo</T3>
        </Col>

        <Col cols={12} className="mt-40">
          <T3>Regiões do Brasil</T3>
        </Col>
        <Col cols={12} className="mt-10 mb-20">
          <RegionsContainer data={regions} />
        </Col>

        <UFContainerByRegion regions={regions} ufs={ufs} />

      </Box>
    </Container>
  );
}

export default Migration;
