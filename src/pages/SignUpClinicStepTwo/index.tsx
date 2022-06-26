import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";

import * as yup from "yup";


import { useAuth } from "../../hooks/AuthContext";

import { Container, Card, Bottom, Content, Aside, Shifts, Time } from "./styles";

import Footer from "../../components/Footer";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, SubmitHandler  } from 'react-hook-form';


import FormImg from '../../assets/formImg03.png'


type Inputs = {
  capacity: number;
  seg: [],
  ter: [],
  qua: [],
  qui: [],
  sex: [],

  morningstart: number
  morningend: number
  afternoonstart: number
  afternoonend: number
  nightstart: number
  nightend: number

};


const schema = yup.object({
  capacity: yup.number().required('Informe a capaciade de atendimento por turno').typeError('Informe a capaciade de atendimento por turno'),
  // seg: yup.array(),
  // ter: yup.array(),
  // qua: yup.array(),
  // qui: yup.array(),
  // sex: yup.array(),

  // morningstart: yup.date().required('Informe um horario valido'),
  // morningend: yup.date().required('Informe um horario valido'),
  // afternoonstart: yup.date().required('Informe um horario valido'),
  // afternoonend: yup.date().required('Informe um horario valido'),
  // nightstart: yup.date().required('Informe um horario valido'),
  // nightend: yup.date().required('Informe um horario valido'),

  // morninglunchstart: yup.date().required('Informe um horario valido'),
  // morninglunchend: yup.date().required('Informe um horario valido'),
  // afternoonlunchstart: yup.date().required('Informe um horario valido'),
  // afternoonlunchend: yup.date().required('Informe um horario valido'),
  // nightunchstart: yup.date().required('Informe um horario valido'),
  // nightlunchend: yup.date().required('Informe um horario valido'),
 
}).required();


const SignUpClinicStepTwo = ():JSX.Element => {

  const {  signupclinic } = useAuth();
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

 const onSubmit: SubmitHandler<Inputs> = async data => {
  
    
    signupclinic(data)
    history.push('/dashboard')
};


  return (
    <Container>
      <Content>
        <Aside>
          <h1>Passo 02 de 02</h1>
          <img src={FormImg} alt="FormImg" />
        </Aside>
      <Card>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Cadastro de Consultorio</h1>

          <label>Capacidade de atend. p/ turno</label>
          <input type="number" placeholder="Nome" {...register("capacity")} />
          <p>{errors.capacity?.message}</p>

          <label>Turnos Disponiveis</label>
          <Shifts>
            <section>
              <label>Seg</label>
              <div>
                <input {...register("seg")} type="checkbox" value="morningseg" id="segmorning"/>
                <label htmlFor="segmorning">Manha</label>
              </div>
              <div>
                <input {...register("seg")} type="checkbox" value="afternoonseg" id="segafternoon"/>
                <label htmlFor="segafternoon">Tarde</label>
              </div>
              <div>
                <input {...register("seg")} type="checkbox" value="nightseg" id="segnight"/>
                <label htmlFor="segnight">Noite</label>
              </div>
            </section>
            <section>
              <label>Ter</label>
              <div>
                <input {...register("ter")} type="checkbox" value="morningtea" id="termorning"/>
                <label htmlFor="termorning">Manha</label>
              </div>
              <div>
                <input {...register("ter")} type="checkbox" value="afternoontea" id="terafternoon"/>
                <label htmlFor="terafternoon">Tarde</label>
              </div>
              <div>
                <input {...register("ter")} type="checkbox" value="nighttea" id="ternight"/>
                <label htmlFor="ternight">Noite</label>
              </div>
            </section>
            <section>
              <label>Qua</label>
              <div>
                <input {...register("qua")} type="checkbox" value="morningqua" id="quamorning"/>
                <label htmlFor="quamorning">Manha</label>
              </div>
              <div>
                <input {...register("qua")} type="checkbox" value="afternoonqua" id="quaafternoon"/>
                <label htmlFor="quaafternoon">Tarde</label>
              </div>
              <div>
                <input {...register("qua")} type="checkbox" value="nightqua" id="quanight"/>
                <label htmlFor="quanight">Noite</label>
              </div>
            </section>
            <section>
              <label>Qui</label>
              <div>
                <input {...register("qui")} type="checkbox" value="morningqui" id="quimorning"/>
                <label htmlFor="quimorning">Manha</label>
              </div>
              <div>
                <input {...register("qui")} type="checkbox" value="afternoonqui" id="quiafternoon"/>
                <label htmlFor="quiafternoon">Tarde</label>
              </div>
              <div>
                <input {...register("qui")} type="checkbox" value="nightqui" id="quinight"/>
                <label htmlFor="quinight">Noite</label>
              </div>
            </section>
            <section>
              <label>Sex</label>
              <div>
                <input {...register("sex")} type="checkbox" value="morningsex" id="sexmorning"/>
                <label htmlFor="sexmorning">Manha</label>
              </div>
              <div>
                <input {...register("sex")} type="checkbox" value="afternoonsex" id="sexafternoon"/>
                <label htmlFor="sexafternoon">Tarde</label>
              </div>
              <div>
                <input {...register("sex")} type="checkbox" value="nightsex" id="sexnight"/>
                <label htmlFor="sexnight">Noite</label>
              </div>
            </section>
          </Shifts>

          <Time>
            <article>
            <label>Horas Trabalhadas</label>
              <section>
                <label>Manha</label>
                <div>
                  <input type="time" placeholder="00:00" {...register("morningstart")} 
                  min="7:00" max="11:59"/>
                  
                  <input type="time" placeholder="00:00" {...register("morningend")} 
                  min="7:00" max="11:59"/>
                  
                </div>
              </section>
              <section>
                <label>Tarde</label>
                <div>
                  <input type="time" placeholder="00:00" {...register("afternoonstart")}
                  min="12:00" max="16:59" />
                  
                  <input type="time" placeholder="00:00" {...register("afternoonend")} 
                  min="12:00" max="16:59"/>
                  
                </div>
              </section>
              <section>
                <label>Noite</label>
                <div>
                  <input type="time" placeholder="00:00" {...register("nightstart")} 
                  min="17:00" max="23:59"/>
                  
                  
                  <input type="time" placeholder="00:00" {...register("nightend")} 
                  min="17:00" max="23:59"/>
                  
                </div>
              </section>
            </article>
          </Time>

          
          <input type="submit" value="Cadastrar" />
        </Form>
      </Card>
      </Content>
      <Bottom>
        {/* <Footer /> */}
      </Bottom>
    </Container>
  );
};

export default SignUpClinicStepTwo;