import React from 'react';

import { Container, Content, Aside, Bottom } from './styles';

import { useAuth } from '../../hooks/AuthContext';

import CoverImg from '../../assets/coverImg.png'
import { Link } from 'react-router-dom';





const Home = (): JSX.Element => {
  const { logedUser  } = useAuth();


  return (
    <Container>
      <img src={CoverImg} alt="Imagem de capa" />
      <Content>
        <Aside>
          <div>
            <h1>Bem vindo ao App</h1>
            <h2>Tenha a melhor experiencia em saude</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta mauris ut nulla semper posuere. Cras eget venenatis nulla, a consequat odio. Nullam sit amet massa porttitor, vehicula tortor ac, luctus nibh. Duis lacinia vel sapien at venenatis. Sed eleifend sem non sapien malesuada tincidunt. Donec fermentum eu arcu a consectetur. Cras aliquet vitae velit non auctor. Vestibulum ante ipsum primis in </p>
          </div>
          <div>
            <a href="/signin">Já Possuo Cadastro</a>
            <a href="/signup">Cadastrar Consultorio</a>
          </div>
          
        </Aside>
      </Content>
      <Bottom>
        {/* <Footer /> */}
      </Bottom>
    </Container>
  );
};

export default Home;
