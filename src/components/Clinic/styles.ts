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
  /* padding: 4rem 2rem; */

  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;

  @media (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    }
    @media (max-width: 720px) {
      width: 90%;
      flex-direction: column;

    }

    h2{
    font-size: 1.25rem;
    line-height: 2rem;
    @media (max-width: 1080px) {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }
  label{
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 700;
    @media (max-width: 1080px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }
  span{
    font-size: 1rem;
    line-height: 2rem;

    @media (max-width: 1080px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    @media (max-width: 720px) {
      font-size: 1rem;
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
  
`;
export const CalendarContainer = styled.section`

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

  @media (max-width: 1080px) {
    margin: 0;
    }
      @media (max-width: 720px) {
        margin: 0;
        padding: 1rem;

    }

  .react-calendar {
  width: 100%;
  max-width: 100%;
  background: white;
  font-family: Roboto,Arial, Helvetica, sans-serif;
  line-height: 1.5rem;
  padding: 2rem;

  @media (max-width: 1080px) {
    }
      @media (max-width: 720px) {
        padding: 1rem;

    }

}
.react-calendar--doubleView {
  width: 100%;
}
.react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: -0.5em;
}
.react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 50%;
  margin: 0.5em;
}
.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

}
.react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
}
.react-calendar button:enabled:hover {
  cursor: pointer;
}
.react-calendar__navigation {
  display: flex;
  height: 3rem;
  margin-bottom: 1rem;
  width: 100%;
}
.react-calendar__navigation button {
  min-width: 3rem;
  background: none;
}
.react-calendar__navigation button:disabled {
  background-color: #f0f0f0;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: #e6e6e8;
}
.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  @media (max-width: 1080px) {
      font-size: 1rem;
    }
      @media (max-width: 720px) {
      font-size: .75rem;
    }
}
.react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}
.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75em;
  font-weight: bold;
}
.react-calendar__month-view__days__day--weekend {
  color: #FF0000;
}
.react-calendar__month-view__days__day--neighboringMonth {
  color: var(--color-02);
}
.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em 0.5em;
}
.react-calendar__tile {
  max-width: 100%;
  padding: 0.75rem 0.5rem;
  background: none;
  text-align: center;
  line-height: 16px;
  border-radius: 5px;
}
.react-calendar__tile:disabled {
  background-color: #f0f0f0;
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: var(--color-02);
  color: var(--color-03);
}
.react-calendar__tile--now {
  background: #ffff00;
  
}

.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  color: var(--color-02);
  background: #ffff00;
}
.react-calendar__tile--hasActive {
  background: var(--color-01);
  color: white;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;
  color: white;
}
.react-calendar__tile--active {
  background: var(--color-01);
  color: white;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: var(--color-01);
  color: white;
}
.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}
&.desactive{
    display: none;
    opacity: 0;
  }

  >div{
    >button{
    color: white;
    background: var(--color-01);
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-top: 2rem;
    border: none;
    height: auto;
  }
  }

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
  height: auto;
  -webkit-box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4); 
  box-shadow: 0px 8px 10px -1px rgba(0,0,0,0.4);
  margin: 0 1rem;

  transition: all 1s;
  
  @media (max-width: 1080px) {
    }
      @media (max-width: 720px) {

    }

  &.desactive{
    display: none;
    opacity: 0;
  }

  &.active{
    display: flex;
    opacity: 100;
    width: 60%;
  }
  

h1{
      &+h1{
        margin-top: 1rem;

      }
      &+p{
        margin: 0.5rem 0;
      }
    }


  h2{
    margin-bottom: 1rem;
  }

  section{
      width: 100%;
    }


  ul{
      width: 80%;
      margin: auto;
    }

  li{
    list-style: none;
      padding: 1rem 2rem;
      width: 100%;
      border: solid 2px var(--color-02);
      border-radius: 5px;
      margin: 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active{
        background: var(--color-01);
        color: var(--color-03);
  }
  }

  button{
    color: white;
    background: var(--color-01);
    padding: 1rem 2rem;
    border-radius: 5px;
    border: none;
    height: auto;

    &.desactive{
      
    }
  }
`
