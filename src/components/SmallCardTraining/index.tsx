import React, { useContext } from "react";
import { TextProps } from "react-native";
import { ThemeContext } from "styled-components/native";
import { Container,Title } from "./styles";

type Props ={
  color:string;
  title:string;
}

export function SmallCardTraining({color,title}:Props){
 
  return(
    <Container style={{backgroundColor:color}}>
      <Title>{title}</Title>
    </Container>
  )
}