import React from "react";
import { PressableProps } from "react-native";
import {Container,Arrow} from "./styles";

type Props = PressableProps &{
  directionArrow:'arrowleft'|'arrowright';

}

export function ArrowButton({directionArrow,...rest}:Props){
  return (
    <Container {...rest}>

      <Arrow name={directionArrow} size={14}></Arrow>

    </Container>

  )
}