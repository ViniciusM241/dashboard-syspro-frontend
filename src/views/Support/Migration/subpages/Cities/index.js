import React, { useState, useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import getByUfs from "../../services/getByUfs";

import { CitiesContainer } from './styles.js';
import {
  Container,
  Col,
  T1,
  T3,
  Box,
  Inline,
  ProgressBar,
} from '~/components';

function City() {
  const navigate = useNavigate();
  const { uf } = useParams();
  const [selectedUf, setSelectedUf] = useState({});

  const _getByUfs = async () => {
    const data = await getByUfs(uf);
    setSelectedUf(data);
  };

  const redirect = (cityName, city) => {
    navigate(`/suporte/migracao/${uf}/cidades/${city.ibgeId}/${encodeURIComponent(cityName)}`);
  };

  useEffect(() => {
    _getByUfs();
  }, []);

  return (
    <Container>
      <Col cols={12} className="mt-10">
        <T1>Migração BIN ISO</T1>
      </Col>
      <Box className="mt-20">
        <Col cols={12} className="mb-20">
          <T3><NavLink to="/suporte/migracao">Voltar</NavLink>&nbsp;- Cidades do estado de {uf}</T3>
        </Col>

        <Col cols={12} className="mt-10">
          <CitiesContainer>
            {
              selectedUf.cities && Object.keys(selectedUf.cities).map((key) => {
                const city = selectedUf.cities[key];

                return (
                  <Inline key={key} className="city-container" onClick={() => redirect(key, city)}>
                    <Col cols={2}>
                      <p className="label">
                        <strong>{key}</strong> <span style={{ fontSize: '12px' }}>({city.total})</span>
                      </p>
                    </Col>
                    <Col cols={8}>
                      <ProgressBar
                        value={city.percent}
                        max={city.total}
                        done={city.bin}
                        notDone={city.notBin}
                      />
                    </Col>
                  </Inline>
                );
              })
            }
          </CitiesContainer>
        </Col>
      </Box>
    </Container>
  );
}

export default City;
