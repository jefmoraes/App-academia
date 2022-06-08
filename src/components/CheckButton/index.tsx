import React from "react";
import {Container} from "./styles";
import { Check } from "../../Icons/Check";
type Props = {
  focused:boolean;
}

export function CheckButton({focused}:Props){

  return (
    <Container style={!focused && {opacity:0.5}}>
      { focused && <Check/> }
    </Container>

  )
}