import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import { Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ThemeContext } from "styled-components/native";
import { Days } from "../Days";
import { SmallCardTraining } from "../SmallCardTraining";
import { CardContainer, DaysContent, EditContainer, ImageIconEdit, SmallCardContainer, TextProfile } from './styles'

type Props = {
  pos:number;
  title:string;
  changeList?: (pos) => void;
  focused:boolean;
  setChangeIndex?: (pos) => void;
  weekDay:any ;
  id:string;
  goToEdit?: (pos) => void;
}
export function CardHomeItem({pos,title, changeList, focused, setChangeIndex, weekDay, id, goToEdit}:Props){
  const {colors} = useContext(ThemeContext);
  return(
    <CardContainer
      onPress={() => { 
        changeList(pos)
        setChangeIndex(pos)
      }} 
      style={[
        {backgroundColor:focused ? colors.cardSelected : colors.cardNotSelected},
        focused && {borderWidth:0.5, borderColor:colors.icon}
      ]}
    >
      <SmallCardContainer>
        <SmallCardTraining
          title={String.fromCharCode(65+pos)}
          color={colors.smallCardTraining}
        />
        <TextProfile style={{marginLeft:25}}>{title}</TextProfile>
      </SmallCardContainer>
      <EditContainer>
        <DaysContent>
          {
            Object.keys(weekDay).map((item,index) => {
              return(
              id === weekDay[item] && <Days key={index} title={item} focused/>
              
            )})
          }
        </DaysContent>
        <Pressable 
          onPress={() =>{
            return (
              goToEdit(pos)

              )
            }} 
            style={{padding:6}}>
          <ImageIconEdit
            source={require('../../Icons/editar.png')}
          />
        </Pressable>
      </EditContainer>
    </CardContainer> 
  )
}