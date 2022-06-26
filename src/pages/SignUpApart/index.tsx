import React, { useEffect, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form } from "@unform/web";

import { VscSignIn } from "react-icons/vsc";


import { Container, Card, Bottom, Content } from "./styles";
const SignUpApart = ():JSX.Element => {

  return (
    <Container>

      <Content>
      <Card>
        <div>
        <h1>Por favor Escolha como se cadastrar</h1>
        </div>
        
      <div>
            <a href="/signup">Como Medico</a>
            <a href="/signuppatient">Como Paciente</a>
        </div>
      </Card>
      </Content>
      <Bottom>
        {/* <Footer /> */}
      </Bottom>
    </Container>
  );
};

export default SignUpApart;