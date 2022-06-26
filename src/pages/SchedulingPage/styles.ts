import styled from 'styled-components';
import { darken, lighten } from 'polished';
export const Container = styled.main`

display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  
`

export const Content = styled.main`
  width: 1120px;
  margin: auto;
  /* padding: 0 2rem; */
  height: 100vh;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 1080px) {
    width: 100%;
   flex-direction: column;
   padding: 4rem 1rem;
    }
    @media (max-width: 720px) {
      width: 90%;
      justify-content: center;
      padding: 4rem 1rem;
    }


  label{
    font-size: 1.25rem;
  }

  img{
    max-width: 45%;
    height: auto;

    @media (max-width: 720px) {
      display: none;
    }
    
  }
  >svg{
      max-width: 10%;
      height: auto;
      fill: var(--white);
      margin-top: 2rem;

      & + svg{
        margin-left: 1rem;
      }
    }
`

export const Card = styled.article`

  width: 50%;
  border-radius: 5px;
  display: flex;
  height: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  color: var(--color-02);
  padding: 4rem 3rem;
  -webkit-box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4); 
  box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4);
`

export const Bottom = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100px;
  width: 100%;
  top: 6em;
  padding-bottom: 1em;
  transform: translateY(100%);
`;




