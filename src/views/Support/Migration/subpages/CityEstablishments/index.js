import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import getCityPlanEstablishments from "../../services/getCityPlanEstablishments.js";
import { currency, capitalizeName }from '~/utils/masks';

import {
  Container,
  Col,
  T1,
  T3,
  T2,
  Box,
  Inline,
  Table,
} from '~/components';
import NavBar from "../../components/NavBar/index.js";

function CityEstablishments() {
  const { uf, city, ibgeId } = useParams();
  const [loadingCities, setLoadingCities] = useState(false);
  const [cityPlan, setCityPlan] = useState({});
  const [inside, setInside] = useState([]);
  const [outside, setOutside] = useState([]);

  const _getCityPlanEstablishments = async () => {
    setLoadingCities(true);
    const data = await getCityPlanEstablishments(ibgeId);
    setCityPlan(data);
    setLoadingCities(false);
  };

  const columns = [
    {
      label: 'ID',
      accessor: 'companyId',
    },
    {
      label: 'Fantasia',
      accessor: 'companyName',
    },
    {
      label: 'Vendas período aberto (R$)',
      accessor: 'lastValue',
      value: (original, row) => {
        return currency(row);
      },
    },
    {
      label: 'Rede',
      accessor: 'networkName',
      value: (original, row) => {
        return capitalizeName(row);
      },
    },
  ];

  const outsideColumns = [
    {
      label: 'ID',
      accessor: 'companyId',
    },
    {
      label: 'Fantasia',
      accessor: 'companyName',
    },
    {
      label: 'Rede',
      accessor: 'networkName',
      value: (original, row) => {
        return capitalizeName(row);
      },
    },
  ];

  const onClickRow = () => {

  };

  const onFetchData = (x, totalArray, setStateArray) => {
    const offset = x.pageIndex * x.maxPage;
    const limit = x.maxPage;
    const newData = totalArray?.slice(offset, limit + offset) || [];

    if (setStateArray) {
      setStateArray(newData);
    }
  };

  useEffect(() => {
    _getCityPlanEstablishments();
  }, []);

  useEffect(() => {
    setOutside(cityPlan.outsideActiveEstablishmentsList);
  }, [cityPlan.outsideActiveEstablishmentsList]);

  useEffect(() => {
    setInside(cityPlan.activeEstablishments);
  }, [cityPlan.activeEstablishments]);

  return (
    <Container>
      <Col cols={12} className="mt-10">
        <T1>Migração BIN ISO</T1>
      </Col>
      <Box className="mt-20">
        <Col cols={12} className="mb-20">
          <T3><NavLink to={`/suporte/migracao/${uf}/cidades`}>Voltar</NavLink>&nbsp;- Plano de migração de estabelecimentos da cidade de {city}</T3>
        </Col>
        <Col cols={12} className="mb-20">
          <NavBar />
        </Col>
        <Col cols={12}>
          <T2 className="mb-10">Estabelecimentos</T2>
        </Col>
        {
          loadingCities ? ''
          : (
            <>
              <Col cols={12}>
                <T3 className="mb-10">Quantidades de ECs na cidade? <strong>{cityPlan.qtyEstablishments}</strong></T3>
              </Col>
              <Col cols={12} className="mb-20">
                <Inline>
                  {
                    cityPlan.activeEstablishmentsList?.length ?
                    <Table
                      data={inside || []}
                      columns={columns}
                      onClickRow={onClickRow}
                      onFetchData={(x) => onFetchData(x, cityPlan.activeEstablishmentsList, setInside)}
                      maxPage={20}
                      total={cityPlan.activeEstablishmentsList?.length || 0}
                    /> : ''
                  }
                </Inline>
              </Col>
              <Col cols={12}>
                <T3 className="mb-20">Quantidade de ECs com vendas (ativos)? <strong>{cityPlan.activeEstablishments}</strong></T3>
              </Col>
              <Col cols={12}>
                <T3 className="mb-20">Possui Redes grandes? <strong>{cityPlan.hasNetworks ? 'Sim' : 'Não'}</strong></T3>
              </Col>
              {
                cityPlan.hasNetworks ? (
                  <>
                    <Col cols={12}>
                      <T3>Redes</T3>
                    </Col>
                    <Col cols={12} className="mt-10">
                      <Inline style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        {cityPlan.networksList.map((network, index) => (<p key={index}>- {capitalizeName(network)}</p>))}
                      </Inline>
                    </Col>
                  </>
                ) : ''
              }
              <Col cols={12}>
                <T2 className="mt-40 mb-10">Ação fora da cidade</T2>
              </Col>
              <Col cols={12}>
                <T3 className="mb-20">Quantidades de ECs? <strong>{cityPlan.outsideQtyEstablishments}</strong></T3>
              </Col>
              <Col cols={12} className="mb-20">
                <Inline>
                  {
                    cityPlan.outsideActiveEstablishmentsList?.length ?
                    <Table
                      data={outside || []}
                      columns={outsideColumns}
                      onClickRow={onClickRow}
                      onFetchData={(x) => onFetchData(x, cityPlan.outsideActiveEstablishmentsList, setOutside)}
                      maxPage={20}
                      total={cityPlan.outsideActiveEstablishmentsList?.length || 0}
                    /> : ''
                  }
                </Inline>
              </Col>
              <Col cols={12}>
                <T3 className="mb-20">Possui Redes grandes? <strong>{cityPlan.hasNetworks ? 'Sim' : 'Não'}</strong></T3>
              </Col>
              {
                cityPlan.outsideHasNetworks ? (
                  <>
                    <Col cols={12}>
                      <T3>Redes</T3>
                    </Col>
                    <Col cols={12} className="mt-10">
                      <Inline style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        {cityPlan.outsideNetworksList.map((network, index) => (<p key={index}>- {capitalizeName(network)}</p>))}
                      </Inline>
                    </Col>
                  </>
                ) : ''
              }
            </>
          )
        }
      </Box>
    </Container>
  );
}

export default CityEstablishments;
