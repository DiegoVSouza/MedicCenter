import React, { useEffect, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form } from "@unform/web";

import { VscSignIn } from "react-icons/vsc";

import * as yup from "yup";


import { useAuth } from "../../hooks/AuthContext";

import { Container, Card, Options, Bottom, Content, Aside } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, SubmitHandler  } from 'react-hook-form';

import FormImg from '../../assets/formImg.png'



type Inputs = {
  id: number;
  name: string;
  crn: string;
  email: string;
  password: string;
  specialty: string;
};


const schema = yup.object({
  name: yup.string().required('Informe seu nome'),
  crn: yup.string().required('Informe seu CRN'),
  password: yup.string().required('Informe sua senha'),
  email: yup.string().email('Informe um email valido').required('Informe um email valido'),
  specialty: yup.string().required('Informe sua especialidade'),
  
}).required();


const SignUp = ():JSX.Element => {

  const { signup } = useAuth();
  const history = useHistory();


  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)});



 const onSubmit: SubmitHandler<Inputs> = data => {
  
  
  signup(data)
  

  history.push('/dashboard')
  

};

  return (
    <Container>
      <Content>
        <Aside>
          <img src={FormImg} alt="FormImg" />
        </Aside>
      <Card>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Cadastro</h1>
          <label>Nome</label>
          <input type="text" placeholder="Nome" {...register("name")} />
          <p>{errors.name?.message}</p>

          <label>Email</label>
          <input type="text" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label>Senha</label>
          <input type="password" placeholder="Senha" {...register("password")} />
          <p>{errors.password?.message}</p>

          <label>CRN</label>
          <input type="text" placeholder="CRN" {...register("crn")} />
          <p>{errors.crn?.message}</p>

          <label>Especialidade</label>
          <input type="text" placeholder="Especialidade" {...register("specialty")} />
          <p>{errors.specialty?.message}</p>


          <input type="submit" value="Criar Conta" />
          <Options>
            <section>
              <Link to="/signin">
                <VscSignIn />
                SignIn
              </Link>
            </section>
          </Options>
        </Form>
      </Card>
      </Content>
      <Bottom>
        {/* <Footer /> */}
      </Bottom>
    </Container>
  );
};

export default SignUp;