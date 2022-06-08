import React, { useState } from "react";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import {TextBox, TextBoxInput } from "./styles"

type Props = TextInputProps & {
  style?: StyleProp<ViewStyle>;
}
export function TextBoxComponent({style,...rest}:Props){
  return(
    <TextBox style={style}>
      <TextBoxInput
        {...rest}
      />
    </TextBox>
  )
}