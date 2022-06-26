import React from 'react';

import { Container, Content, Bottom, Card } from './styles';

import { useAuth } from '../../hooks/AuthContext';

import CoverImg from '../../assets/coverImg.png'
import { Link } from 'react-router-dom';





const Alert = (): JSX.Element => {
  const { logedUser  } = useAuth();


  return (
    <Container>
      <Content>
        <Card>
          <div>
            <h1>Bem vindo ao App</h1>
            <h2>Para acessar a pagina de agendamento por favor realize o pre-cadastro</h2>
          </div>
          <div>
            <a href="/signuppatient">Cadastrar</a>
          </div>

        </Card>
      </Content>
      <Bottom>
        {/* <Footer /> */}
      </Bottom>
    </Container>
  );
};

export default Alert;
