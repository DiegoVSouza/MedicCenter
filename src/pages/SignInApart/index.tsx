import React, { useEffect, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form } from "@unform/web";

import { VscSignIn } from "react-icons/vsc";


import { Container, Card, Bottom, Content } from "./styles";
const SignInApart = ():JSX.Element => {

  return (
    <Container>

      <Content>
      <Card>
      <div>
        <h1>Por favor Escolha como se cadastrar</h1>
      </div>
      <div>
            <a href="/signin">Como Medico</a>
            <a href="/signinpatient">Como Paciente</a>
        </div>
      </Card>
      </Content>
      <Bottom>
        {/* <Footer /> */}
      </Bottom>
    </Container>
  );
};

export default SignInApart;