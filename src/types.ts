export interface User{
  crn: string,
  password: string,
}

export interface Patient{
  email: string,
  password: string,
}

export interface PatientAccount{
  id: number,
  name: string,
  phone: number,
  cpf: number,
}


export interface Account{
  id: number;
  name: string;
  crn: string;
  email: string;
  password: string;
  specialty: string;
}

export interface Clinic{
  id:number;
  userId: number;
  data: {
    name: string;
    cnpj: number,
    street: string,
    number: number,
    cep: number,
    complement: string,
  };
  time: {
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
  };
}

export interface Schedule{
  id:number,
  userId:number,
  clinicId: number,
  clinicName: string,
  medicId: number,
  date: string,
  day: string,
  shift: string,
}

