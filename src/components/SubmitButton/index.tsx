import React, { ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps{
  children: ReactNode
  type: string
}

const Button = ({ children, type, ...rest }:ButtonProps) => (
  <Container type={type} {...rest}>
    {children}
  </Container>
);

export default Button;
