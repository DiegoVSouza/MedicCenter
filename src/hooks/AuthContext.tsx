import React, { createContext, useState, useContext, ReactNode } from "react";
import { api } from "../services/api";

import { Account, Clinic, Patient, PatientAccount, User } from "../types";

import { useHistory } from "react-router-dom";

interface AuthProviderProps {
    children: ReactNode;
  }

  interface AuthContextData {
    logedUser: Account;
    logedPatient: PatientAccount;
    loged: boolean;
    signup:(user:Account) => void;
    signuppatient:(user:PatientAccount) => void;
    signin:(user:User) => Promise<void>;
    signinpatient:(user:Patient) => Promise<void>;
    signupclinic:(data:any) => void;
    logout: ()=> void;
    setStepOne: React.Dispatch<React.SetStateAction<StepOne>>;

  }

  interface StepOne {
    name: string;
    cnpj: number,
    street: string,
    number: number,
    cep: number,
    complement: string,
  };

  interface StepTwo{
    capacity: number;
    seg: [string],
    ter: [string],
    qua: [string],
    qui: [string],
    sex: [string],
  
    morningstart: number
    morningend: number
    afternoonstart: number
    afternoonend: number
    nightstart: number
    nightend: number
  }
  

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


const AuthProvider = ({ children }:AuthProviderProps): JSX.Element => {

  const [logedUser, setLogedUser] = useState<Account>(() => {
    const user = localStorage.getItem("@MedicCenter:user");

    if (user) {
      return JSON.parse(user);
    }

    return {};
  });

  const [logedPatient, setLogedPatient] = useState<PatientAccount>(() => {
    const user = localStorage.getItem("@MedicCenter:patient");

    if (user) {
      return JSON.parse(user);
    }

    return {};
  });


  const [stepOne, setStepOne] = useState<StepOne>({    
    name: "",
    cnpj: 0,
    street: "",
    number: 0,
    cep: 0,
    complement: "",})


  const [loged, setLoged] = useState(() => {
    const user = localStorage.getItem("@MedicCenter:loged");

    if (user) {
      return true;
    }

    return false;
  });

  const history = useHistory();

  const [userId, setUserID] = useState(()=>{
    return Math.round(Date.now()*Math.random())
  })

  const signup = (user:Account) => {
    try {
      const currentUser={
        id: userId,
        name: user.name,
        email: user.email,
        password: user.password,
        crn: user.crn,
        specialty: user.specialty,
      }
      setLoged(true)
      localStorage.setItem("@MedicCenter:loged", JSON.stringify(true));

      localStorage.setItem("@MedicCenter:user", JSON.stringify(currentUser));
      
      setLogedUser(currentUser);

      api.post<Account>('accounts',currentUser)
      
    } catch (err) {
      console.log(err);
    }
  }

  const [patientId, setPatientId] = useState(()=>{
    return Math.round(Date.now()*Math.random())
  })

  const signuppatient = (user:PatientAccount) => {
    try {

      const currentPatient={
        id: patientId,
        name: user.name,
        phone: user.phone,
        cpf: user.cpf,

      }

      setLoged(true)
      localStorage.setItem("@MedicCenter:loged", JSON.stringify(true));

      localStorage.setItem("@MedicCenter:patient", JSON.stringify(currentPatient));
      setLogedPatient(currentPatient);

      api.post('patients',currentPatient)


      
    } catch (err) {
      console.log(err);
    }
  }



  
  const [clinicId, setClinicId] = useState(()=>{
    return Math.round(Date.now()*Math.random())
  })

  const signupclinic = (data:StepTwo) => {
    
    try {

      const clinics:Clinic = {
        id: clinicId,
        userId: logedUser.id,
        data: stepOne,
        time: data,
      
    }

      if(!loged){ throw Error("Nenhum Usuario logado")}

    else{
      
      api.post(`clinics`, clinics)

    }


    } catch(err) {
      window.alert(err)
    }
  }

  const logout = ()=>{

    setLoged(false)
    localStorage.removeItem("@MedicCenter:user");
    localStorage.removeItem("@MedicCenter:patient");
    localStorage.removeItem("@MedicCenter:loged");
    setLogedUser({
      id: 0,
      name: "",
      crn: "",
      password: "",
      email: "",
      specialty: "",
  });
  setLogedPatient({
    id: 0,
    name: '',
    phone: 0,
    cpf: 0,
  })
    
  }

  const signin = async (user:User) => {
    try {

      const {data: users} = await api.get<Account[]>('/accounts');
      const find = users.find(users => users.crn === user.crn)

      if(!find){ throw Error("CRN não encontrado")}
      if(find.password !== user.password){ throw Error("Senha incorreta")}
      else{
        setLoged(true)
        localStorage.setItem("@MedicCenter:loged", JSON.stringify(true));
        localStorage.setItem("@MedicCenter:user", JSON.stringify(find));
        setLogedUser(find);
        
      }

      
    } catch (err) {
      window.alert("CRN ou senha incorretos!");
    }
  }
  const signinpatient = async (user:Patient) => {
    try {

      const {data: users} = await api.get<Account[]>('/patients');
      const find = users.find(users => users.email === user.email)

      if(!find){ throw Error("email não encontrado")}
      if(find.password !== user.password){ throw Error("Senha incorreta")}
      else{
        setLoged(true)
        localStorage.setItem("@MedicCenter:loged", JSON.stringify(true));
        localStorage.setItem("@MedicCenter:patient", JSON.stringify(find));
        setLogedUser(find);
      }

      
    } catch (err) {
      window.alert("email ou senha incorretos!");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loged,
        logedUser,
        logedPatient,
        signin,
        signinpatient,
        signup,
        signuppatient,
        signupclinic,
        logout,
        setStepOne,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData{
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };