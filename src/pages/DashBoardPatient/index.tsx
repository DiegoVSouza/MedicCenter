import React from 'react';

import { Body, Container, Content, Head, Main, Nav } from './styles';

import { RiHomeLine } from "react-icons/ri";
import { useAuth } from '../../hooks/AuthContext';
import { VscAdd } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Medic from '../../components/Medic';
import ScheduleComponent from '../../components/SchedulePatient';
import Alert from '../../components/Alert';



const DashBoardPatient = (): JSX.Element => {

  const { logedPatient, loged  } = useAuth();

  const splitedUrl = window.location.pathname.split("/")
  function url(){

    if(splitedUrl.length > 2){
      
      return JSON.parse(splitedUrl[2])
    }
    
  }

  const displayPage = ()=>{
    if(loged){
      return(
      <Container>
        <Content>
        <Nav>
          <a href={url()} className={ window.location.pathname === url() ? 'active' : ''}>
            <RiHomeLine/> 
            Home
          </a>  
        </Nav>
          <Main>
            <Head>
              <div>
                <h1>Olá {logedPatient.name}</h1>
                <label>Bem vindo 👋</label>
              </div>
              <Link to='signupclinicone'><button>Cadastrar Consultorio <VscAdd/></button></Link>
            </Head>
              <Medic medicid={url()}/>
              <ScheduleComponent patientid={logedPatient.id}/>
          </Main>
        </Content>
      </Container>)
    }else{
      return(
        <Alert/>
      )
    }
  }

  
  return (
    displayPage()
  );
};

export default DashBoardPatient;
