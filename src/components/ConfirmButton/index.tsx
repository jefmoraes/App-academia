import React, { useContext } from "react";
import { PressableProps } from "react-native";
import { ThemeContext } from "styled-components/native";
import { Check } from "../../Icons/Check";
import { Container } from "./styles";


export function ConfirmButton({...rest}:PressableProps){
  const {colors} = useContext(ThemeContext)
  return(
    <Container {...rest}>
      <Check
        color={colors.icon} 
        width={18} 
        height={14}
      />
    </Container>
  )
}