import styled from 'styled-components';
import { darken, lighten } from 'polished';
export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-02);
  
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  width: 20%;
  justify-self: flex-start;
  height: 100vh;
  background: var(--color-03);
  padding: 2rem 0;

  div{

  }
  
  a{
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    
    padding: 1rem 2rem;
    color: var(--color-03);
    height: 2rem;
    cursor: pointer;
    position: relative;

    &:hover{
      background: ${darken(0.7, "#F3F3F3")};
    }

    &.active{
          color: white;
          font-weight: 500;
          border-bottom: solid 5px var(--color-01);
          background: var(--color-01);
        }
  }


    svg{
    fill: var(--color-03);
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.25rem;
  }
  
  
  
`
export const Head = styled.section`
  width: 100%;

  height: 15%;
  background: var(--color-03);
  border-radius: 5px;
  line-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;

  -webkit-box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4); 
  box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4);

  div{
  }
  h1{
    font-size: 1.5rem;
  }

  button{
    height:3rem;
    background: var(--color-01);
    padding: 0 1rem;
    border-radius: 5px;
    color: var(--color-03);
    display: flex;
    align-items: center;
    font-weight: 400;
    
    svg{
      margin: 0 0.25rem;
    }
  }
  
`
export const Body = styled.section`
  width: 100%;
  margin-top: 1rem;
  height: 40%;
  background: var(--color-03);
  border-radius: 5px;
  line-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;

  -webkit-box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4); 
  box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4);

  div{
  }
  h1{
    font-size: 1.5rem;
  }

  button{
    height:3rem;
    background: var(--color-01);
    padding: 0 1rem;
    border-radius: 5px;
    color: var(--color-03);
    display: flex;
    align-items: center;
    font-weight: 400;
    
    svg{
      margin: 0 0.25rem;
    }
  }
  
`
export const Main = styled.article`
  width: 100%;
  padding: 1rem;
  justify-self: flex-start;
  height: 100vh;
  padding: 1rem 2rem;
`
  

export const Content = styled.main`
  width: 100%;
  margin: auto;
  padding: 0;
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




