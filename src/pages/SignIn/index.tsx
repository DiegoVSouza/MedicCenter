import React, { useEffect, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form } from "@unform/web";

import { VscSignIn } from "react-icons/vsc";

import * as yup from "yup";


import { useAuth } from "../../hooks/AuthContext";

import { Container, Card, Options, Bottom, Content, Aside } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, SubmitHandler  } from 'react-hook-form';





type Inputs = {
  crn: string;
  password: string,
};


const schema = yup.object({
  crn: yup.string().required('Informe seu crn'),
  password: yup.string().required('Informe uma senha valida'),
  
}).required();


const SignIn = ():JSX.Element => {

  const { signin } = useAuth();

  const history = useHistory();

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

 const onSubmit: SubmitHandler<Inputs> = data => {
            
  signin(data)
  history.push('/dashboard')

};

  return (
    <Container>

      <Content>
      <Card>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <label>CRN</label>
          <input type="text" placeholder="CRN" {...register("crn")} />
          <p>{errors.crn?.message}</p>

          <label>Senha</label>
          <input type="password" placeholder="Senha" {...register("password")} />
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

export default SignIn;