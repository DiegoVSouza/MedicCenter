import React, { useEffect, useState } from "react";

// import { useAuth } from "../../hooks/AuthContext";

// import { Content, Container, Card } from "./styles";

// import { api } from "../../services/api";
// import { Account, Clinic } from "../../types";
// import { useSchedule } from "../../hooks/ScheduleContext";
// import { useHistory } from "react-router-dom";

// interface ClinicProps{
//   clinicId: number;
// }

// const ClinicComponentv01: React.FC<ClinicProps> = ({ clinicId }) => {
    
//   const [clinic, setClinic] = useState<Clinic>()
//   const [medic, setMedic] = useState<Account>()
//   const [shift, setShift] = useState("")
//   const [cardStyle, setCardStyle] = useState("")
//   const [resultStyle, setResultStyle] = useState("desactive")

//   const { logedPatient  } = useAuth();
//   const { updateSchedule, currentUrl } = useSchedule()
//   const history = useHistory();


//   useEffect(()=>{
//     async function loadData(){

//       const {data:clinics}= await api.get<Clinic[]>('clinics');
//       const {data:medics}= await api.get<Account[]>('accounts');

//       const userclinic = clinics.find(clinic => clinic.id === clinicId)
//       if(!userclinic) return;

//       const find = medics.find(medic => medic.id === userclinic.userId)
//       if(!find) return;

//       setClinic(userclinic)
//       setMedic(find)

//     }
//     loadData()
    
//   },[])

//   function getTime(day:string){
//     setShift(day)
//   }

//   function displaySeg(){

//     if(clinic?.time.seg !== undefined){
//     return(
//       <ul>
//             <label>Seg</label>
//             {clinic?.time.seg?.map(day=>(
//               <a onClick={()=>getTime(day)}><li className={ day === shift ? "active" : ""} key={day}>
//                 {day.includes("morning") ? "Manha" : "" || day.includes("afternoon") ? "Tarde" : "Noite" }</li></a>
//             ))}
//           </ul>
//     )}else{
//       return;
//     }
//   }
//   function displayTer(){
//     if(clinic?.time.ter !== undefined){
//     return(
//       <ul>
//             <label>Ter</label>
//             {clinic?.time.ter?.map(day=>(
//                             <a onClick={()=>getTime(day)}><li className={ day === shift ? "active" : ""} key={day}>
//                 {day.includes("morning") ? "Manha" : "" || day.includes("afternoon") ? "Tarde" : "Noite" }</li></a>
//             ))}
//           </ul>
//     )}else{
//       return;
//     }
//   }
//   function displayQua(){
//     if(clinic?.time.qua !== undefined){
//     return(
//       <ul>
//             <label>Qua</label>
//             {clinic?.time.qua?.map(day=>(
//                             <a onClick={()=>getTime(day)}><li className={ day === shift ? "active" : ""} key={day}>
//                 {day.includes("morning") ? "Manha" : "" || day.includes("afternoon") ? "Tarde" : "Noite" }</li></a>
//             ))}
//           </ul>
//     )}else{
//       return;
//     }
//   }
//   function displayQui(){
//     if(clinic?.time.qui !== undefined){
//       return(
//         <ul>
//               <label>Qui</label>
//               {clinic?.time.qui?.map(day=>(
//                               <a onClick={()=>getTime(day)}><li className={ day === shift ? "active" : ""} key={day}>
//                 {day.includes("morning") ? "Manha" : "" || day.includes("afternoon") ? "Tarde" : "Noite" }</li></a>
//               ))}
//             </ul>
//       )
// }else{
//     return;
//     }
//   }
//   function displaySex(){
//     if(clinic?.time.sex !== undefined ){
//     return(
//       <ul>
//             <label>Sex</label>
//             {clinic?.time.sex?.map(day=>(
//                             <a onClick={()=>getTime(day)}><li className={ day === shift ? "active" : ""} key={day}>
//                 {day.includes("morning") ? "Manha" : "" || day.includes("afternoon") ? "Tarde" : "Noite" }</li></a>
//             ))}
//           </ul>
//     )}else{
//       return;
//     }
//   }

//   function displayMor(){
//     if(clinic?.time.morningstart !== undefined){
//       return(
//         <div>
//           <label>Manha </label>
//           <span>de {clinic?.time.morningstart}</span>
//           <span> as {clinic?.time.morningend}</span>
//         </div>
//       ) 
      
//     }
//   }
//   function displayAft(){
//     if(clinic?.time.afternoonstart !== undefined){
//       return(
//         <div>
//           <label>Tarde </label>
//           <span>de {clinic?.time.afternoonstart}</span>
//           <span> as {clinic?.time.afternoonend}</span>
//         </div>
//       ) 
      
//     }
//   }
//   function displayNig(){
//     if(clinic?.time.nightstart !== undefined){
//       return(
//         <div>
//           <label>Noite </label>
//           <span>de {clinic?.time.nightstart}</span>
//           <span> as {clinic?.time.nightend}</span>
//         </div>
//       ) 
      
//     }
//   }

//   function schedule(){
//     setCardStyle("desactive")
//     setResultStyle("active")

//     if(!medic) return;
//     if(!clinic?.data.name) return;

//     const schedule={
//       id: 0,
//       userId: logedPatient.id,
//       clinicId: clinicId,
//       clinicName: clinic.data.name,
//       medicId:medic.id,

//       day: shift.includes("seg") ? "Segunda" : "" || shift.includes("ter") ? "Terça" : "" ||
//       shift.includes("qua") ? "Quarta" : "" || shift.includes("qui") ? "Quinta" : "Sexta",

//       shift: shift.includes("morning") ? "Manha" : "" || shift.includes("afternoon") ? "Tarde" : "Noite" 
//     }
    

//     updateSchedule(schedule)

//     setTimeout(()=>history.push(currentUrl), 2000 )
    
//   }

//   return (
//     <Container>
//       <Content>
        
//         <Card className={cardStyle}>
//         <section>
//         <h1>{clinic?.data.name}</h1>   
//         <div>
//           {displaySeg()}
//           {displayTer()}
//           {displayQua()}
//           {displayQui()}
//           {displaySex()}
//         </div>
//         </section>
//         <button onClick={schedule}>Comfirmar</button>
//         </Card>
//         <Card className={cardStyle}>
//           <h2>Horarios</h2>
//           {displayMor()}
//           {displayAft()}
//           {displayNig()}
            
//         </Card>
//         <Card className={resultStyle}>
//           <h1>Muito Obrigado</h1>
//           <p>Sua consulta esta marcada para:</p>
//           <h1>Dia: {shift.includes("seg") ? "Segunda" : "" || shift.includes("ter") ? "Terça" : "" ||
//             shift.includes("qua") ? "Quarta" : "" || shift.includes("qui") ? "Quinta" : "Sexta" }
             
//           </h1>
//           <h1>Turno: {shift.includes("morning") ? "Manha" : "" || shift.includes("afternoon") ? "Tarde" : "Noite" }</h1>
            
//         </Card>
//       </Content>
//     </Container>
//   );
// };

// export default ClinicComponentv01;
