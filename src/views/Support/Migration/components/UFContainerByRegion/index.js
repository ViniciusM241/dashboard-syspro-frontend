import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Col,
  T3,
  Inline,
  ProgressBar,
} from '~/components';

import {
  UFContainer,
  ItemContainer,
} from './styles';

function UFContainerByRegion({
  regions,
  ufs,
}) {
  const navigate = useNavigate();
  const keys = Object.keys(regions);

  const redirect = (uf) => {
    navigate(`/suporte/migracao/${uf}/cidades`);
  };

  return (
    <>
      {
        keys.map((item, index) => (
          <ItemContainer key={index}>
            <Col cols={12} className="mt-20">
              <T3>Região {item}</T3>
            </Col>
            <Col cols={12} className="mt-10">
              <UFContainer>
                {
                  ufs[item]?.map((uf, key) => {
                    const ufsName = Object.keys(uf);

                    return (
                      <Inline key={key} className="uf-container" onClick={() => redirect(ufsName)}>
                        <Col cols={2}>
                          <p className="label">
                            <strong>{ufsName}</strong> <span style={{ fontSize: '12px' }}>({uf[ufsName].total})</span>
                          </p>
                        </Col>
                        <Col cols={8}>
                          <ProgressBar
                            value={uf[ufsName].percent}
                            max={uf[ufsName].total}
                            done={uf[ufsName].bin}
                            notDone={uf[ufsName].notBin}
                          />
                        </Col>
                      </Inline>
                    );
                  })
                }
              </UFContainer>
            </Col>
          </ItemContainer>
        ))
      }
    </>
  );
}

export default UFContainerByRegion;
