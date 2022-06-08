import React, { useContext } from "react";
import { PressableProps } from "react-native";
import { ThemeContext } from "styled-components/native";
import {Container, Day} from './styles'
type Props =  PressableProps &{
  title:string;
  focused:boolean;
  active?:boolean;
}
export function Days({title, focused, active,...rest}:Props){
  const {colors} = useContext(ThemeContext)
  return(
    <Container {...rest} 
      style={{
        backgroundColor: focused ? colors.daycardselect : colors.colorbg2,
        opacity:active ? 0.5 : 1
      }}
    >
      <Day>{title}</Day> 
    </Container>

  )
}