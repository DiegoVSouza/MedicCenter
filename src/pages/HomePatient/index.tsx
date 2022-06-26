import React from 'react';

import { Container, Content, Bottom } from './styles';

import { useAuth } from '../../hooks/AuthContext';

import CoverImg from '../../assets/coverImg.png'
import { Link } from 'react-router-dom';
import ClinicComponent from '../../components/Clinic';
import Medic from '../../components/Medic';
import { useSchedule } from '../../hooks/ScheduleContext';
import Alert from '../../components/Alert';





const HomePatient = (): JSX.Element => {
  const { loged  } = useAuth();
  const { updateUrl } = useSchedule()

    
  const splitedUrl = window.location.pathname.split("/")
  
  function url(){

    if(splitedUrl.length > 2){

      updateUrl(splitedUrl[2])
      
      return JSON.parse(splitedUrl[2])
    }
    
  }

  function displayPage(){
    if(loged){
      return(
        <Container>
          <Content>
            <h2>Por favor escolha uma clinica de sua preferencia</h2>
            <Medic medicid={url()}/>
          </Content>
      <Bottom>
      </Bottom>
    </Container>
      )
    }
    else{
      return(
        <Alert/>
      )
  }
  }


  return (
    displayPage()
  );
};

export default HomePatient;
