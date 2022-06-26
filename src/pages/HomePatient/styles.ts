import styled from 'styled-components';
import { darken, lighten } from 'polished';
export const Container = styled.main`

display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  
`

export const Content = styled.main`
  width: 1120px;
  height: 100%;
  margin: auto;
  /* padding: 0 2rem; */
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1080px) {
    width: 100%;
    }
    @media (max-width: 720px) {
      width: 90%;
    }


  label{
    font-size: 1.25rem;
  }

  h2{
    font-size: 1.25rem;
    line-height: 2rem;
    @media (max-width: 1080px) {
      font-size: 0.75rem;
      line-height: 1.5rem;
    }
    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }

  img{
    /* width: 30rem; */
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

export const Bottom = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100px;
  width: 100%;
  top: 6em;
  padding-bottom: 1em;
  transform: translateY(100%);
`;




