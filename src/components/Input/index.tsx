import React, { forwardRef  } from 'react';

import { Container, MainInput } from './styles';




interface InputProps{
  name: string;
  type: string;
  placeholder: string;
  
}

const Input:React.FC<InputProps> = ({ name, type , placeholder, ...rest  }) => {

  return (
    <Container >
      <MainInput
        placeholder={placeholder}
        type={type}
        {...rest }
      />
    </Container>
  );
};

export default Input;

