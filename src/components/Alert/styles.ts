import styled from 'styled-components';
import { darken, lighten } from 'polished';
export const Container = styled.main`

display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
  justify-content: center;
  align-items: center;


  label{
    font-size: 1.25rem;
  }

  h2{
    font-size: 1.25rem;
    margin-top: 2rem;
    line-height: 2rem;
    @media (max-width: 1080px) {
      font-size: 0.75rem;
      line-height: 1.5rem;
    }
    @media (max-width: 720px) {
      font-size: 0.5rem;
    }
  }
  h1{
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


  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    &:last-of-type{
    flex-direction: row;

    margin-top: 2rem;

    a{
    color: var(--color-02);
    background: var(--color-03);
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-top: 2rem;
    border: none;

    & + a{
      margin-left: 1rem;
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
    margin-top: 2rem;
    text-align: justify;
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




