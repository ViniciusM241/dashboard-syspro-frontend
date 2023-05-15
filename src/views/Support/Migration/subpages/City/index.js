import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import getCityPlan from "../../services/getCityPlan.js";
import getCityPlanFiltered from "../../services/getCityPlanFiltered.js";
import { cnpj, cpf, currency }from '~/utils/masks';

import {
  Container,
  Col,
  T1,
  T3,
  Box,
  Inline,
  Table,
} from '~/components';
import ServicesPie from "../../components/ServicesPie.js";
import ChartLabel from "../../components/ChartLabel/index.js";
import NavBar from "../../components/NavBar/index.js";

function City() {
  const { uf, city, ibgeId } = useParams();
  const [companies, setCompanies] = useState([]);
  const [filters, setFilters] = useState({});
  const [cityPlan, setCityPlan] = useState({});
  const [loadingCities, setLoadingCities] = useState(false);
  const colors = ['#A8E10C', '#FFDB15', '#8A6FDF', '#151E3F', '#D36060' , '#87E752', '#F9AB55', '#5CC8FF', '#FEC9F1'];
  let colorCount = 0;

  const _getCityPlan = async () => {
    const data = await getCityPlan(ibgeId);
    setCityPlan(data);
  };

  const _getCityPlanFiltered = async () => {
    setLoadingCities(true);
    const data = await getCityPlanFiltered(ibgeId, filters);
    setCompanies(data);
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
      label: 'Qtde usuários',
      accessor: 'usersQuantity',
      value: (original, row) => {
        return <span>{row}</span>
      },
    },
    {
      label: 'Parcelamento (R$)',
      accessor: 'value',
      value: (original, row) => {
        return currency(row);
      },
    },
    {
      label: 'CNPJ/CPF',
      accessor: 'cnpj',
      value: (original, row) => {
        if (row.length >= 14)
          return cnpj(row);
        else
          return cpf(row);
      },
    },
    {
      label: 'Migração finalizada?',
      accessor: 'isMigrated',
      value: (original, row) => {
        if (row) return <span style={{backgroundColor: colors[5], color: '#FFF', padding: '2px 5px', borderRadius: '2px'}}>Sim</span>;
        else return 'Não';
      },
    },
  ];

  const onClickRow = () => {

  };

  const onFetchData = () => {

  };

  useEffect(() => {
    _getCityPlan();
  }, []);

  useEffect(() => {
    _getCityPlanFiltered();
  }, [filters]);

  return (
    <Container>
      <Col cols={12} className="mt-10">
        <T1>Migração BIN ISO</T1>
      </Col>
      <Box className="mt-20">
        <Col cols={12} className="mb-20">
          <T3><NavLink to={`/suporte/migracao/${uf}/cidades`}>Voltar</NavLink>&nbsp;- Plano de migração de empresas da cidade de {city}</T3>
        </Col>
        <Col cols={12} className="mb-20">
          <NavBar />
        </Col>
        <Col cols={12}>
          <T3 className="mb-10">Serviços</T3>
        </Col>
        <Inline left>
          <Col cols={3}>
            <ServicesPie
              dataset={{
                labels: cityPlan.labels?.map(x => x.label),
                data: cityPlan.data,
              }}
              colors={colors}
            />
          </Col>
          <Col cols={9} style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            {
              cityPlan.labels?.length ? cityPlan.labels?.map((item, key) => {
                const active = filters.type === item.type && filters.product === item.product
                let color = '';

                if (colorCount > colors.length - 1) {
                  colorCount = 0;
                }

                color = colors[colorCount];

                colorCount++;

                const onClick = () => {
                  setFilters({
                    type: item.type,
                    product: item.product,
                    label: item.label,
                  });
                };

                return (
                  <ChartLabel
                    key={key}
                    label={item.label}
                    data={cityPlan.data[key]}
                    color={color}
                    onClick={onClick}
                    active={active}
                  />
                );
              }) : ''
            }
          </Col>
        </Inline>
        {
          filters.label && filters.type ?
          (
            <>
              <Col cols={12} className="mt-20">
                <T3 className="mb-10">Empresas {filters.label} ({companies.length})</T3>
              </Col>
              <Col cols={12} className="mt-10">
                <Inline>
                  <Table
                    data={loadingCities ? [] : companies}
                    columns={columns}
                    onClickRow={onClickRow}
                    onFetchData={onFetchData}
                    maxPage={companies.length}
                    total={companies.length}
                  />
                </Inline>
              </Col>
            </>
          ) : ''
        }
      </Box>
    </Container>
  );
}

export default City;
