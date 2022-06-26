import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    span{
      color: #e87c03;
      font-size:0.8em;
      position: relative;
      bottom:5px;
    }
    
 `;

 export const MainInput = styled.input`
    margin:7px 0;
    border: 2px solid #333;
    border-radius: 5px;
    background-color: none;
    height: 40px;
    padding: 1rem;
    border: 2px solid var(--color-02);
    /* ::-webkit-input-placeholder  {
      font-size: 0.75em;
    } */
    width: 100%;

      ${props=> props.type==='checkbox' && css`
        height: 10px;
        padding: 2px;
        `}

        @media(max-width: 760px){
        padding: 1px;
    }
 `