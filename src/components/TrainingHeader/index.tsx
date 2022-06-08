import React from "react";
import { Content, LeftContent, RightContent, TrainingHeaderTitle } from "./styles"

export function TrainingHeader(){
  return(
    <Content>
      <LeftContent>
        <TrainingHeaderTitle>Exercício</TrainingHeaderTitle>
      </LeftContent>
      <RightContent>
        <TrainingHeaderTitle>Repetições</TrainingHeaderTitle>
      </RightContent>
    </Content>
)
}