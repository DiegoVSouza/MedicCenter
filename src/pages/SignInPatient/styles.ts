import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: -999;

  }
  
`;
export const Content = styled.div`
  
  width: 1120px;
  margin: auto;
  padding: 4rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;


  @media(max-width: 1080px){
    width: 100%;
  }
  @media(max-width: 760px){
    width: 100%;
    justify-content: center;
    padding: 4rem 1rem;
    margin: 0;
  }
  

`;

export const Aside = styled.div`

  img{

    width: 90%;

    @media(max-width: 1080px){
    width: 80%;
    }
  @media(max-width: 760px){
    display: none;
    
  }
    
  }
  
`
export const Background = styled.img`
  position:absolute;
    z-index: -99;
    width:100%;
    height: inherit;`;


export const Card = styled.div`

  background-color: white;
  border-radius: 5px;
  padding: 3rem;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 45%;
  height: 100%;
  -webkit-box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4); 
  box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4);

  @media(max-width: 1080px){
    width: 60%;
  }
  @media(max-width: 760px){
    width: 100vh;
    margin: 0;
    h1{
      font-size: 1.7em;
    }
  
  }

  input{
    margin: 0.5rem 0;
    border-radius: 5px;
    background-color: none;
    height: 2.5rem;
    padding: 1rem;
    border: 2px solid var(--color-02);
    /* ::-webkit-input-placeholder  {
      font-size: 0.75em;
    } */
    width: 100%;

        @media(max-width: 720px){
        padding: 1px;
    }
  }

  

  input[type=submit]{
    color: white;
    background: var(--color-01);
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-top: 2rem;
    border: none;
    height: auto;
  }

  p{
    color: red;
    align-self: flex-start;
    font-size: 0.75rem;
  }


  h1{
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--color-02)
  }

  label{
    align-self: flex-start;
    margin: 1rem 0 0.5rem 0;
  }
  
  form{
    width: 100%;
    display: flex;
    height: 150%;
    justify-content: center;
    align-items:center;
    flex-direction: column;
  }

`;

export const Formulario = styled.form`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  h1{
    width: 86%;
  }
`;
export const Options = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 2rem;
  section{
    a{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media(max-width: 760px){
    font-size: 1em;

    input{
      margin:3px 0;
    }
    width: 100%;
  }
`;
export const Bottom = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100px;
  width: 100%;
  position: relative;
  top: 6em;
  padding-bottom: 1em;


`;