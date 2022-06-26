import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';;


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    

    &::-webkit-scrollbar{
        width: 5px;
        background: var(--color-01);
        
       
        
    }

    &::-webkit-scrollbar-thumb{
        background: var(--color-02);
        border-radius: 10px;

    }
    
 
  }

  :root{
    --color-01: #263D78;
    --color-02: #525252; 
    --color-03: #F3F3F3;
  }

  @media (max-width: 1080px){
    html{
        font-size: 93.75%;
    }
  }
  @media (max-width: 720){
      html{
          font-size: 87.5%;
      }
  }
  body {
    background: var(--color-03);
    -webkit-font-smoothing: antialiased;
    
  }

  a{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  body, input, textarea, select, button{
    font: 400 1rem "Roboto", sans-serif;
    border: 0;
}

  #root {
    margin: 0 auto;
    padding: 0 0 50px;
  }

  button {
    cursor: pointer;
    font-weight: bold;
  }

  input[type=submit]{
    cursor: pointer;
    font-weight: bold;
  }


  .react-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  
  .react-modal-content {
    position: relative;
    padding: 3rem;
    width: 100%;
    max-width: 576px;
    background: var(--background);
    border-radius: 0.25rem;
    z-index: 999;
  }

`;

