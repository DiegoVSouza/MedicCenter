import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form } from "@unform/web";

import { VscSignIn } from "react-icons/vsc";

import * as yup from "yup";


import { useAuth } from "../../hooks/AuthContext";

import { Container, Card, Bottom, Content, Aside, Address } from "./styles";

import Footer from "../../components/Footer";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, SubmitHandler  } from 'react-hook-form';


import FormImg from '../../assets/formImg02.png'


type Inputs = {
  name: string;
  cnpj: number,
  street: string,
  number: number,
  cep: number,
  complement: string,
};


const schema = yup.object({
  name: yup.string().required('Informe seu nome'),
  cnpj: yup.number().required('Informe um CNPJ valido').typeError('Informe um CNPJ valido'),
  street: yup.string().required('Informe uma rua valido'),
  number: yup.number().required('Informe um numero valido').typeError('Informe um numero valido'),
  cep: yup.number().required('Informe um CEP valido').typeError('Informe um CEP valido'),
  complement: yup.string(),
  
}).required();


const SignUpClinicStepOne = ():JSX.Element => {

  const { setStepOne } = useAuth();
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
            
  setStepOne(data)
  
  history.push('/signupclinictwo')
  

};

  return (
    <Container>
      <Content>
        <Aside>
          <h1>Passo 01 de 02</h1>
          <img src={FormImg} alt="FormImg" />
        </Aside>
      <Card>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Cadastro de Consultorio</h1>
          <label>Nome</label>
          <input type="text" placeholder="Nome" {...register("name")} />
          <p>{errors.name?.message}</p>

          <label>CNPJ</label>
          <input type="number" placeholder="CNPJ" {...register("cnpj")} />
          <p>{errors.cnpj?.message}</p>

          
          <Address>
            <div>
              <label>Rua</label>
              <input type="text" placeholder="Rua" {...register("street")} />
              <p>{errors.street?.message}</p>
            </div>
            <div>
              <label>Numero</label>
              <input type="text" placeholder="Numero" {...register("number")} />
              <p>{errors.number?.message}</p>
            </div>

            <div>
              <label>CEP</label>
              <input type="number" placeholder="CEP" {...register("cep")} />
              <p>{errors.cep?.message}</p>
            </div>

            <div>
              <label>Complemento</label><span>(opicional)</span>
              <input type="text" placeholder="Complemento" {...register("complement")} />
              <p>{errors.complement?.message}</p>
            </div>
          </Address>


          <input type="submit" value="Proximo" />
        </Form>
      </Card>
      </Content>
      <Bottom>
        {/* <Footer /> */}
      </Bottom>
    </Container>
  );
};

export default SignUpClinicStepOne;