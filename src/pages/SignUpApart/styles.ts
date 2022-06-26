import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  width: 100%;
  height: 100vh;
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

    h1{
    font-size: 1.25rem;
  }


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

  div{
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  a{
    color: var(--color-02);
    background: var(--color-03);
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-top: 2rem;
    border: none;
    margin: 0 0.5rem;


    &:last-of-type{
      background: var(--color-01);
      color: white;
    }
  }

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

  
`;

export const Bottom = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100px;
  width: 100%;
  position: relative;
  top: 6em;
  padding-bottom: 1em;


`;