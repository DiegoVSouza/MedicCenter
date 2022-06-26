import React, { createContext, useState, useContext, ReactNode } from "react";
import { api } from "../services/api";

import { Account, Clinic, Patient, PatientAccount, Schedule, User } from "../types";

import { useHistory } from "react-router-dom";

interface ScheduleProviderProps {
    children: ReactNode;
  }

  interface ScheduleContextData {
    updateSchedule:(agend:Schedule) => void;
    updateUrl: (url:string)=>void;
    currentUrl: string; 
  }


const ScheduleContext = createContext<ScheduleContextData>({} as ScheduleContextData);


const ScheduleProvider = ({ children }:ScheduleProviderProps): JSX.Element => {

  const [currentUrl, setCurrentUrl] = useState<string>(() => {
    const url = localStorage.getItem("@MedicCenter:url");

    if (url) {
      return url;
    }

    return '';
  });

  const updateUrl = (url:string)=>{
    localStorage.setItem("@MedicCenter:url", url );
    setCurrentUrl(url)
  }
 
  const [scheduleId, setScheduleId] = useState(()=>{
    return Math.round(Date.now()*Math.random())
  })

  const updateSchedule = (agend:Schedule)=>{
    try{

      const schedule ={
        id:scheduleId,
        userId: agend.userId,
        clinicId: agend.clinicId,
        clinicName: agend.clinicName,
        medicId: agend.medicId,
        date: agend.date,
        day: agend.day,
        shift: agend.shift,
      }

      if(agend){
        api.post('schedule',schedule)
      }else{
        throw Error
      }

    }catch(err){
      window.alert("Erro ao Agendar")
    }
  }

  return (
    <ScheduleContext.Provider
      value={{
        updateSchedule,
        updateUrl,
        currentUrl,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

function useSchedule(): ScheduleContextData{
  const context = useContext(ScheduleContext);

  return context;
}

export { ScheduleProvider, useSchedule };