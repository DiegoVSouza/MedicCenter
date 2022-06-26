import React, { useEffect, useState } from "react";

import { useAuth } from "../../hooks/AuthContext";

import { Content, Container } from "./styles";

import { api } from "../../services/api";
import { Account, Clinic, Schedule } from "../../types";
import { Link } from "react-router-dom";

interface ScheduleProps{
  medicid: number;
}

const ScheduleComponentMedic: React.FC<ScheduleProps> = ({ medicid }) => {

  const { logedUser } = useAuth();

  const [schedules, setSchedules] = useState<Schedule[]>([])
  const [clinic, setClinic] = useState<Clinic[]>([])


  useEffect(()=>{
    async function loadData(){

      const {data:medics}= await api.get<Account[]>('accounts');
      const {data:schedules}= await api.get<Schedule[]>('schedule');
      const {data:clinics}= await api.get<Clinic[]>('clinics');

      const find = medics.find(medic => medic.id === medicid)
      if(!find) return;
  
      const medicSchedules = schedules.filter(schedule => schedule.medicId === medicid)
      if(!medicSchedules) return;

      const userclinic = clinics.filter(clinic => clinic.userId === find.id )
      if(!userclinic) return;

      setSchedules(medicSchedules)
      setClinic(userclinic)

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
        </div>
        </section>
      </Content>
    </Container>
  );
};

export default ScheduleComponentMedic;
