import React, { useEffect, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form } from "@unform/web";

import { VscSignIn } from "react-icons/vsc";

import * as yup from "yup";


import { useAuth } from "../../hooks/AuthContext";

import { Container, Card, Options, Bottom, Content, Aside } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, SubmitHandler  } from 'react-hook-form';
import { resolve } from "dns";
import { rejects } from "assert";
import { useSchedule } from "../../hooks/ScheduleContext";





type Inputs = {
  email: string;
  password: string,
};


const schema = yup.object({
  email: yup.string().email().required('Informe um email valido'),
  password: yup.string().required('Informe uma senha valida'),
  
}).required();


const SignInPatient = ():JSX.Element => {

  const history = useHistory();

  const { signinpatient } = useAuth();
  const { currentUrl } = useSchedule()


  const [id, setId] = useState(0)

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)});

    useEffect(()=>{
      function changeId(){
         const newId = Math.round(Date.now()*Math.random())
         setId(newId)
     }
     changeId()
 },[])


 const onSubmit: SubmitHandler<Inputs> = async data => {
            
 new Promise ( (resolve, reject )=>{
  
  resolve(signinpatient(data))
 }).then(()=>{
  history.push(currentUrl)
 }
 )
  
  

};

  return (
    <Container>

      <Content>
      <Card>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <label>Email</label>
          <input type="text" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label>Senha</label>
          <input type="text" placeholder="Senha" {...register("password")} />
          <p>{errors.password?.message}</p>

          <input type="submit" value="Entrar" />
          <Options>
            <section>
              <Link to="/signup">
                <VscSignIn />
                SignUp
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

export default SignInPatient;