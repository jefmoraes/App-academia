import React, {useCallback, useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { ThemeContext } from "styled-components/native";
import { ExerciseProps } from "../../screen/CreateTraining";
import { TextBoxComponent } from "../TextBoxComponent";
import {Container, TitleInput, NumberContainer, BoxNumber, Flex, Flexcontainer, Line, ButtonRemoveItem} from "./styles"
type Props ={
  pos:number;
  remove: (pos) => void;
  changeValue: (text, pos, title) => void;
  object: ObjectProps;
}
type ObjectProps ={
  title: string;
  series: string;
  repetition: string;
}
 
export function AddExercise({pos, remove, changeValue, object}:Props){
  const {colors} = useContext(ThemeContext)

  return(
    <Container>
     { 
      <ButtonRemoveItem onPress={() => remove(pos)}>
        <Line/>
      </ButtonRemoveItem>  
        
     }
      <TextBoxComponent
        placeholder="nome do exercicio"
        onChangeText={(text) => changeValue(text, pos, "title")}
        value={object.title}
      />
       <Flexcontainer>
         <Flex>
          <TitleInput>N° de series</TitleInput>
          <NumberContainer>
            <BoxNumber
              maxLength={2}
              keyboardType="numeric"
              placeholderTextColor={colors.text}
              placeholder="0"
              onChangeText={(text) => changeValue(text, pos, "series")}
              value={object.series}
            />
          </NumberContainer>
        </Flex>
        <Flex>
          <TitleInput>N° de repetições</TitleInput>
          <NumberContainer>
            <BoxNumber
              maxLength={2}
              keyboardType="numeric"
              placeholderTextColor={colors.text}
              placeholder="0"
              onChangeText={(text) => changeValue(text, pos, "repetition")}
              value={object.repetition}
            />
          </NumberContainer>
        </Flex>
      </Flexcontainer>
    </Container>
  )
}