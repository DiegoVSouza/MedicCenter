import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  width: 100%;
  height: 100%;
    

 
`;

export const Content = styled.main`

  width: 1120px;
  margin: auto;
  padding: 4rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Card = styled.article`
  margin: auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: solid 2px var(--color-02);
  background: white;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4); 
  box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4);
  margin: 0 1rem;

  transition: all 1s;

  &.desactive{
    display: none;
    opacity: 0;
  }

  &.active{
    display: flex;
    opacity: 100;
    width: 60%;
  }
  

  section{
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    div{
    margin-top: 1rem;

    ul{
      width: 100%;
      &+ul{
        margin-left: 1rem;
      }
    }

    li{
      list-style: none;
      padding: 1rem 2rem;
      border: solid 2px var(--color-02);
      border-radius: 5px;
      margin: 1rem 0;

      &.active{
        background: var(--color-01);
        color: var(--color-03);
      }
    }

    label{
      font-size: 1rem;
      & + label{
        margin-top: 0.25rem;
      }
    }

    &:last-of-type{
      width: 80%;
      display: flex;
      margin-left: 3rem;


    }
  }
}

h1{
      &+h1{
        margin-top: 1rem;

      }
      &+p{
        margin: 0.5rem 0;
      }
    }



  div{

  }
  h2{
    margin-bottom: 1rem;
  }

  button{
    color: white;
    background: var(--color-01);
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-top: 2rem;
    border: none;
    height: auto;
  }
`
