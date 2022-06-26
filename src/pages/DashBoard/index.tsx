import React from 'react';

import { Body, Container, Content, Head, Main, Nav } from './styles';

import { RiHomeLine } from "react-icons/ri";
import { useAuth } from '../../hooks/AuthContext';
import { VscAdd } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import ScheduleComponentMedic from '../../components/ScheduleMedic';



const DashBoard = (): JSX.Element => {
  const { logedUser  } = useAuth();


  return (
    <Container>
      <Content>
      <Nav>
        <a href='/dashboard' className={ window.location.pathname === '/dashboard' ? 'active' : ''}>
          <RiHomeLine/> 
          Home
        </a>  

      </Nav>

        <Main>
          <Head>
            <div>
              <h1>Olá {logedUser.name}</h1>
              <label>Bem vindo 👋</label>
            </div>

            <Link to='signupclinicone'><button>Cadastrar Consultorio <VscAdd/></button></Link>

          </Head>
          <ScheduleComponentMedic medicid={logedUser.id}/>
        </Main>
        
      </Content>
      

    </Container>
  );
};

export default DashBoard;
