import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/AuthContext";

import { ReactComponent as LogoImg } from "../../assets/logo.svg";

import { HeaderLeft, Head, HeaderRigth, Content } from "./styles";

import { VscSignIn, VscSignOut } from "react-icons/vsc";

const Header = ():JSX.Element => {
  const { logedUser, logedPatient, logout, loged } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout()
  }

  const accountDisplay = () =>{
    if(loged){
      
      return (

        <>
        {logedUser.name || logedPatient.name} 
        <VscSignOut onClick={() => handleLogout()} />
        </>
       
      )
     
    }

       return(
        <>
          <a className="signin" href="/signinapart"> Entre </a>
          <a className="signup" href="/signupapart"> Cadastrar-se </a>
          
        </>
       
       )
  }

  return (
    <Head>
      <Content>
      <HeaderLeft>
        <Link to="/">
        <LogoImg/>
        </Link>
      </HeaderLeft>
      <HeaderRigth>
          {accountDisplay()}
      </HeaderRigth>
      </Content>
    </Head>
  );
};

export default Header;
