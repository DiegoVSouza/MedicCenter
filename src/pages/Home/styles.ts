import styled from 'styled-components';
import { darken, lighten } from 'polished';
export const Container = styled.main`

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
  
`

export const Content = styled.main`
  width: 1120px;
  margin: auto;
  padding: 0 2rem;
  height: 100vh;
  color: var(--white);
  display: flex;
  justify-content: space-between;

  

  label{
    font-size: 1.25rem;
  }

  >h2{
    font-size: 2.5rem;
    margin-top: 2rem;
    line-height: 1rem;
    @media (max-width: 1080px) {
      font-size: 1.5rem;
    }
    @media (max-width: 720px) {
      font-size: 1.25rem;
    }
  }
  >h1{
    font-size: 3rem;
    @media (max-width: 1080px) {
      font-size: 2.5rem;
    }
    @media (max-width: 720px) {
      font-size: 2rem;
    }
    span{
      color: var(--blue);
      font-size: 4rem;
      font-weight: 900;
      @media (max-width: 1080px) {
      font-size: 3rem;
    }
      @media (max-width: 720px) {
      font-size: 2rem;
    }
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

export const Aside = styled.article`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%); 
  width: 50%;
  display: flex;
  height: 60%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background: var(--color-02);
  color: var(--color-03);


  div{
    width: 70%;
    padding: 0 2rem;
    
    &:last-of-type{
    margin-top: 2rem;
    a{
    color: var(--color-02);
    background: var(--color-03);
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-top: 2rem;
    border: none;

    & + a{
      margin: 1rem;
    }

    &:last-of-type{
      background: var(--color-01);
      color: white;
    }
  }
  }
  }
  h1{
    font-size: 2rem;
  }
  h2{
    margin-top: 1rem;
  }
  p{
    margin-top: 1rem;
    line-height: 1.5rem;
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




