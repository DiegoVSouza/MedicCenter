import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    margin-top: 1rem;
    

 
`;

export const Content = styled.article`
    margin: auto;
  padding: 1rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: solid 2px var(--color-02);
  background: white;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4); 
  box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4);

  section{
    margin: 0 2rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    div{
      
    display: flex;
    flex-direction: column;
    justify-content: center;



    & + div{
      margin-left: 1rem;
    }

    ul{
      width: 100%;
    }

    li{
      list-style: none;
      padding: 1rem 2rem;
      width: 100%;
      border: solid 2px var(--color-02);
      border-radius: 5px;
      margin: 1rem 0;
    h3{
      margin-bottom: 0.5rem;
    }
    }

    h2{
      margin-bottom: 0.5rem;
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


  
`;
