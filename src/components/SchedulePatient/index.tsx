import React, { useCallback, useEffect, useState } from "react";

import { useAuth } from "../../hooks/AuthContext";

import { Content, Container } from "./styles";

import { api } from "../../services/api";
import { PatientAccount, Schedule } from "../../types";
import { Link } from "react-router-dom";

interface ScheduleProps{
  patientid: number;
}

const ScheduleComponent: React.FC<ScheduleProps> = ({ patientid }) => {

  const { logedUser, logedPatient, logout, loged } = useAuth();

  const [schedules, setSchedules] = useState<Schedule[]>([])


  useEffect(()=>{
    async function loadData(){

      const {data:patients}= await api.get<PatientAccount[]>('patients');
      const {data:schedules}= await api.get<Schedule[]>('schedule');

      const find = patients.find(patient => patient.id === patientid)
      if(!find) return;
  
      const patientSchedules = schedules.filter(clinic => clinic.userId === find.id)
      if(!patientSchedules) return;

      setSchedules(patientSchedules)

    }
    loadData()
    
  },[])

  return (
    <Container>
      <Content>
        <section>
        <div>
          <h1>Consultadas agendadas</h1>
        </div>
        
      
        <div>
          <ul>
            {schedules.map(schedule=>(
              <Link to={`/schedulingpage/${schedule.id}`}>
                <li key={schedule.id}>
                  <label>{schedule.clinicName}</label>
                  
                  <label>Dia: {schedule.day} </label>
                  <label>Turno: {schedule.shift}</label>
                </li>
              </Link>
            ))}
          </ul>
          <a href="/"></a>
        </div>
        </section>
      </Content>
    </Container>
  );
};

export default ScheduleComponent;
