import React, { useEffect, useState } from "react";

import { useAuth } from "../../hooks/AuthContext";

import { Content, Container, Card, CalendarContainer } from "./styles";

import { api } from "../../services/api";
import { Account, Clinic } from "../../types";
import { useSchedule } from "../../hooks/ScheduleContext";
import { useHistory } from "react-router-dom";
import { addDays, format, getMonth } from 'date-fns';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'

import { array } from "yup";
import moment from "moment";

interface ClinicProps {
  clinicId: number;
}

const ClinicComponent: React.FC<ClinicProps> = ({ clinicId }) => {
  const [clinic, setClinic] = useState<Clinic>()
  const [value, onChange] = useState(new Date())

  const [medic, setMedic] = useState<Account>()
  const [shift, setShift] = useState("")
  const [date, setDate] = useState("")
  const [day, setDay] = useState("")
  const [cardStyle, setCardStyle] = useState("")
  const [secondCardStyle, setSecondCardStyle] = useState("desactive")
  const [resultStyle, setResultStyle] = useState("desactive")
  

  const { logedPatient } = useAuth();
  const { updateSchedule, currentUrl } = useSchedule()
  const history = useHistory();


  useEffect(() => {
    async function loadData() {

      const { data: clinics } = await api.get<Clinic[]>('clinics');
      const { data: medics } = await api.get<Account[]>('accounts');

      const userclinic = clinics.find(clinic => clinic.id === clinicId)
      if (!userclinic) return;

      const find = medics.find(medic => medic.id === userclinic.userId)
      if (!find) return;

      setClinic(userclinic)
      setMedic(find)

    }
    loadData()

  }, [])

  function displaySeg() {

    if (clinic?.time.seg !== undefined) {
      return (
        <ul>
          {clinic?.time.seg?.map(day => (
            <a onClick={() => getTime(day)}><li className={day === shift ? "active" : ""} key={day}>
              {day.includes("morning") ? "Manha" : "" || day.includes("afternoon") ? "Tarde" : "Noite"}</li></a>
          ))}
        </ul>
      )
    } else {
      return;
    }
  }
  function displayTer() {
    if (clinic?.time.ter !== undefined) {
      return (
        <ul>
          {clinic?.time.ter?.map(day => (
            <a onClick={() => getTime(day)}><li className={day === shift ? "active" : ""} key={day}>
              {day.includes("morning") ? "Manha" : "" || day.includes("afternoon") ? "Tarde" : "Noite"}</li></a>
          ))}
        </ul>
      )
    } else {
      return;
    }
  }
  function displayQua() {
    if (clinic?.time.qua !== undefined) {
      return (
        <ul>
          {clinic?.time.qua?.map(day => (
            <a onClick={() => getTime(day)}><li className={day === shift ? "active" : ""} key={day}>
              {day.includes("morning") ? "Manha" : "" || day.includes("afternoon") ? "Tarde" : "Noite"}</li></a>
          ))}
        </ul>
      )
    } else {
      return;
    }
  }
  function displayQui() {
    if (clinic?.time.qui !== undefined) {
      return (
        <ul>
          {clinic?.time.qui?.map(day => (
            <a onClick={() => getTime(day)}><li className={day === shift ? "active" : ""} key={day}>
              {day.includes("morning") ? "Manha" : "" || day.includes("afternoon") ? "Tarde" : "Noite"}</li></a>
          ))}
        </ul>
      )
    } else {
      return;
    }
  }
  function displaySex() {
    if (clinic?.time.sex !== undefined) {
      return (
        <ul>
          {clinic?.time.sex?.map(day => (
            <a onClick={() => getTime(day)}><li className={day === shift ? "active" : ""} key={day}>
              {day.includes("morning") ? "Manha" : "" || day.includes("afternoon") ? "Tarde" : "Noite"}</li></a>
          ))}
        </ul>
      )
    } else {
      
      return;
    }
  }

  function displayMor() {
    if (clinic?.time.morningstart !== undefined) {
      return (
        <div>
          <label>Manha </label>
          <span>de {clinic?.time.morningstart}</span>
          <span> as {clinic?.time.morningend}</span>
        </div>
      )

    }
  }
  function displayAft() {
    if (clinic?.time.afternoonstart !== undefined) {
      return (
        <div>
          <label>Tarde </label>
          <span>de {clinic?.time.afternoonstart}</span>
          <span> as {clinic?.time.afternoonend}</span>
        </div>
      )

    }
  }
  function displayNig() {
    if (clinic?.time.nightstart !== undefined) {
      return (
        <div>
          <label>Noite </label>
          <span>de {clinic?.time.nightstart}</span>
          <span> as {clinic?.time.nightend}</span>
        </div>
      )

    }
  }

  function schedule() {
    setSecondCardStyle("desactive")
    setResultStyle("active")

    if (!medic) return;
    if (!clinic?.data.name) return;

    const schedule = {
      id: 0,
      userId: logedPatient.id,
      clinicId: clinicId,
      clinicName: clinic.data.name,
      medicId: medic.id,
      date: date,
      day: shift.includes("seg") ? "Segunda" : "" || shift.includes("tea") ? "Terça" : "" 
      || shift.includes("qua") ? "Quarta" : "" || shift.includes("qui") ? "Quinta" : "Sexta",

      shift: shift.includes("morning") ? "Manha" : "" || shift.includes("afternoon") ? "Tarde" : "Noite"
    }


    updateSchedule(schedule)


  }

  function getTime(day: string) {
    setShift(day)
  }

  function getDay(){
    setCardStyle("desactive")
    setSecondCardStyle("active")
    const formattedDay = format(value, 'EEEE');
    const formattedDate = format(value, 'dd/MM/yyyy');
    setDay(formattedDay)
    setDate(formattedDate)
  }


  const handdlesetDay = (e: string) => {
    const parseDataLong = new Date(e);
    // const day = JSON.parse(e)
    const formattedDate = format(parseDataLong, 'dd-MM-yyyy');
    const week = addDays(parseDataLong, 5)
    // setDay(week)
    console.log(week)

  }

  function conclued(){
    history.push(`/dashboardpatient/${currentUrl}`)
  }



  return (
    <Container>
      
      <Content>
      <CalendarContainer className={cardStyle}>
      <h1>{clinic?.data.name}</h1>
          <Calendar onChange={onChange} value={value} />
          <div>
          <button onClick={getDay}>Continuar</button>
          </div>
          
      </CalendarContainer>
        <Card className={cardStyle}>
            <h2>Horarios</h2>
            {displayMor()}
            {displayAft()}
            {displayNig()}

        </Card>
        <Card className={secondCardStyle}>
          <h2>Agora escolha o turno de sua preferencia</h2>
          <h2> {day.toLowerCase().includes("monday") ? "Segunda" : "" || day.toLowerCase().includes("tuesday") ? "Terça" : "" ||
            day.toLowerCase().includes("wednesday") ? "Quarta" : "" || day.toLowerCase().includes("thursday") ? "Quinta" : "" 
            || day.toLowerCase().includes("friday") ? "Sexta" : "" 
            || day.toLowerCase().includes("saturday") ? "Fim de semana não disponivel" : "" 
            || day.toLowerCase().includes("sunday") ? "Fim de semana não disponivel" : ""}

          </h2>

          <section>
            <div>
            {day.toLowerCase().includes("monday") ? displaySeg() : "" || day.toLowerCase().includes("tuesday") ? displayTer() : "" ||
            day.toLowerCase().includes("wednesday") ? displayQua() : "" || day.toLowerCase().includes("thursday") ? displayQui() : displaySex()}
            </div>
            
          </section>
          <button onClick={schedule}>Comfirmar</button>
        
        </Card>
        <Card className={resultStyle}>
           <h2>Muito Obrigado</h2>
          <p>Sua consulta esta marcada para:</p>
          <h2>Dia: {shift.includes("seg") ? "Segunda" : "" || shift.includes("tea") ? "Terça" : "" 
          || shift.includes("qua") ? "Quarta" : "" || shift.includes("qui") ? "Quinta" : "Sexta" }
                </h2>
            <h2>
              Na Data: {date}
            </h2>
           <h2>Turno: {shift.includes("morning") ? "Manha" : "" || shift.includes("afternoon") ? "Tarde" : "Noite" }</h2>
           <button onClick={conclued}>Continuar</button>
            
        </Card>
      </Content>
    </Container>
  );
};

export default ClinicComponent;
