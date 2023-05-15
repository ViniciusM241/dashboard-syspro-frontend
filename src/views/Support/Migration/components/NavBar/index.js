import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
} from './styles';
import { T3 } from "~/components";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const empresasActive = !location.pathname.includes('estabelecimentos');
  const estabelecimentosActive = location.pathname.includes('estabelecimentos');

  // console.log(empre);

  const gotToEstabelecimentos = () => {
    const url = location.pathname.replace('/estabelecimentos', '') + '/estabelecimentos';
    navigate(url);
  };

  const gotToEmpresas = () => {
    const url = location.pathname.replace('/estabelecimentos', '');
    navigate(url);
  };

  return (
    <Container>
      <T3 className={empresasActive ? 'active' : ''} onClick={gotToEmpresas}>Empresas</T3>
      <T3 className={estabelecimentosActive ? 'active' : ''} onClick={gotToEstabelecimentos}>Estabelecimentos</T3>
    </Container>
  );
}

export default NavBar;
