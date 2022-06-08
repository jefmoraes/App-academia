import React, { useContext } from "react";
import {Container} from "./styles"
import { ThemeContext } from 'styled-components/native';
import { StyleProp, ViewStyle } from "react-native";

type Props ={
  fill:Boolean;
  style?:StyleProp<ViewStyle>;
}

export function Bookmark({fill,style}:Props){
  const {colors} = useContext(ThemeContext)
  return(

    <Container 
      style={[style, fill && {borderColor:colors.icon, backgroundColor:colors.colorbg1}]}
      bola={fill ? 8 : 6}
    />

  )
}