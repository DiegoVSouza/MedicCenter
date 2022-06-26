import React from 'react';

import { Container, Content, Bottom, Card } from './styles';

import { useAuth } from '../../hooks/AuthContext';

import CoverImg from '../../assets/coverImg.png'
import { Link } from 'react-router-dom';
import ClinicComponent from '../../components/Clinic';





const SchedulingPage = (): JSX.Element => {
  const { logedUser  } = useAuth();

    
  const splitedUrl = window.location.pathname.split("/")
  function url(){

    if(splitedUrl.length > 2){
      
      return JSON.parse(splitedUrl[2])
    }
    
  }


  return (
    <Container>
      <Content>
      <ClinicComponent clinicId={url()}/>
      </Content>
      
      <Bottom>
        {/* <Footer /> */}
      </Bottom>
    </Container>
  );
};

export default SchedulingPage;
