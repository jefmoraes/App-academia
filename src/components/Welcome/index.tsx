import React from "react";
import { ViewProps } from "react-native";
import { Header } from "../../components/Header";
import {Container, BellowHead, WelcomeTitle, WelcomeSubtitle} from "./styles"

type Props = ViewProps &{
  title: string;
  subtitle?:string
}
export function Welcome({title,subtitle,...rest}:Props){

  return(
    <Container {...rest}>
      <BellowHead>
        <WelcomeTitle>{title}</WelcomeTitle>
        <WelcomeSubtitle>{subtitle}</WelcomeSubtitle>
      </BellowHead>
    </Container>
  )
}