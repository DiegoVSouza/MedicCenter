import React, { useCallback, useEffect, useState } from "react";

import { useAuth } from "../../hooks/AuthContext";

import { Content, Container } from "./styles";

import { api } from "../../services/api";
import { Account, Clinic } from "../../types";
import { Link } from "react-router-dom";

interface MedicProps{
  medicid: number;
}

const Medic: React.FC<MedicProps> = ({ medicid }) => {

  const { logedUser, logedPatient, logout, loged } = useAuth();

  const [medic, setMedic] = useState<Account>({      
    id: 0,
    name: "",
    crn: "",
    password: "",
    email: "",
    specialty: "",})
    
  const [clinics, setClinics] = useState<Clinic[]>([])


  useEffect(()=>{
    async function loadData(){

      const {data:medics}= await api.get<Account[]>('accounts');
      const {data:clinics}= await api.get<Clinic[]>('clinics');

      const find = medics.find(medic => medic.id === medicid)
      if(!find) return;
  
      const userclinics = clinics.filter(clinic => clinic.userId === find.id)
      if(!userclinics) return;

      setMedic(find)
      setClinics(userclinics)

    }
    loadData()
    
  },[])

  


  return (
    <Container>
      <Content>
        <section>
        <div>
          <h2>{medic.name}</h2>
          <label>{medic.crn}</label>
          <label>{medic.specialty}</label>
        </div>
        
      
        <div>
          <ul>
            {clinics.map(clinic=>(
              <Link to={`/schedulingpage/${clinic.id}`}>
                <li key={clinic.id}>
                  <h3>{clinic.data.name}</h3>
                  <label>{clinic.data.street}</label>
                  <label>{clinic.data.number}</label>
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

export default Medic;
