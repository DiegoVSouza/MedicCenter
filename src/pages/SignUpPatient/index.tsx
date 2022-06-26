import React, { useEffect, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form } from "@unform/web";

import { VscSignIn } from "react-icons/vsc";

import * as yup from "yup";
import { IMaskInput } from "react-imask";

import { useAuth } from "../../hooks/AuthContext";

import { Container, Card, Options, Bottom, Content, Aside } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, SubmitHandler  } from 'react-hook-form';

import FormImg from '../../assets/formImg.png'
import { useSchedule } from "../../hooks/ScheduleContext";



type Inputs = {
  id: number;
  name: string;
  phone: number;
  cpf: number;
};


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object({
  name: yup.string().required('Informe seu nome'),
  phone: yup.string().matches(phoneRegExp, 'Insira um numero de telefone valido').required("Insira um numero de telefone valido"),
  cpf: yup.string().min(11, "deu erro").max(11,"erro").required("Insira um CPF Valido")
}).required();



const SignUpPatient = ():JSX.Element => {''

  const { signuppatient } = useAuth();
  const { currentUrl } = useSchedule()
  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)});


 const onSubmit: SubmitHandler<Inputs> = data => {
            
  signuppatient(data)

  history.push(`/homepatient/${currentUrl}`)
  
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

          <label>Telefone</label>
          <input type="phone" placeholder="Telefone" data-mask="(00) 0000-0000" data-mask-selectonfocus="true" {...register("phone")} />
          <p>{errors.phone?.message}</p>

          <label>CPF</label>
          <input type="number" placeholder="CPF"  {...register("cpf")} 
          />
          
          <p>{errors.cpf?.message}</p>
          


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

export default SignUpPatient;