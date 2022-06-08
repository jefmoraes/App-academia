import { CheckButton } from "../CheckButton";
import React, { useState } from "react";
import { Training, LeftContent, TrainingButton, TrainingLabel, RightContent, } from './styles'

type ExerciseProps = {
  title:string;
  series:number;
  repetition:number;
}

type Props = {
  exercise:ExerciseProps;
  checkable?:boolean;
}

export function TrainingItem({exercise,checkable}:Props){
  const [check, setCheck] = useState(false)

  return(
    <Training>
      <LeftContent>
        <TrainingButton onPress={()=> {checkable && setCheck(!check)}}>
         {checkable && <CheckButton focused={check}/>  }
          <TrainingLabel>{exercise.title}</TrainingLabel>
        </TrainingButton>
      </LeftContent>
      <RightContent>
        <TrainingLabel>{`${exercise.series}X${exercise.repetition}`}</TrainingLabel>
      </RightContent>
    </Training>
  )
}