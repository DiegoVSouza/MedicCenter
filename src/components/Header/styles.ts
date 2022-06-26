import styled from 'styled-components';

export const Head = styled.header`
  /* position: fixed; */
 
`;

export const Content = styled.article`
  
  z-index: 999;
  margin: auto;
  max-width: 1120px;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: var(--color-3);
  transition: all ease 1s;
  
`;

export const HeaderLeft = styled.div`

    svg{
        color: var(--color-02);
        width: 2rem;
        height: 2rem;
      }
`;

export const HeaderRigth = styled(HeaderLeft)`
      height: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg{
        fill: var(--color-02);
        width: 2rem;
        height: 2rem;
        cursor: pointer;
      }
      img{
        height: 100%;
      }
      a{

        &.signup{
          color: var(--color-03);
          padding: 0.75rem 1rem;
          background: var(--color-01);
          border-radius: 5rem;
        }
        &.signin{
          color: var(--color-01);
          padding: 0.75rem 1rem;
          border-radius: 5rem;
          margin: 0.5rem;
        }
      }
`;