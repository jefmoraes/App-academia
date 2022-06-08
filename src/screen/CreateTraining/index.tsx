import React, { useCallback, useContext, useEffect, useState } from "react";
import { Alert, Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "styled-components/native";
import { AddExercise } from "../../components/AddExercise";
import { ConfirmButton } from "../../components/ConfirmButton";
import { Days } from "../../components/Days";
import { SmallCardTraining } from "../../components/SmallCardTraining";
import { TextBoxComponent } from "../../components/TextBoxComponent";
import { Welcome } from "../../components/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import { COLLECTION_WORKOUTS } from "../../../Configs/dataBase";

import {
  Container,
  ContainerSmallCardTraining,
  MoreButton,
  SelectDay,
  TitleInput,
  NameTrainingContainer,
  SelectDaysContainer

} from "./styles"
import { Background } from "../../components/Background";

export type ExerciseProps ={
  name: string;
  series: number;
  repetition: number;
}

export function CreateTraining({navigation, route}){
  const {numberCards, week} = route.params;
  const {bottom} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);
  const [training, setTraining] = useState("");
  const [seg, setSeg] = useState (false);
  const [ter, setTer] = useState (false);
  const [qua, setQua] = useState (false);
  const [qui, setQui] = useState (false);
  const [sex, setSex] = useState (false);
  const [sab, setSab] = useState (false);
  const segSelected = week.seg !== '';
  const terSelected = week.ter !== '';
  const quaSelected = week.qua !== '';
  const quiSelected = week.qui !== '';
  const sexSelected = week.sex !== '';
  const sabSelected = week.sab !== '';
  const [cardsContent, setCardsContent] = useState([{title:"", series:'', repetition:''}]); 
  const saveScreenData = async () => {
    try {
      const id = `${uuid.v4()}`;
      const newWorkout = { 
        id,
        title:training,
        exercises:cardsContent,
        
      }
      let isEmpty= true;
      cardsContent.map((item) => {
        const verify = item.title !== '' && item.series !== '' && item.repetition !== '';
        if(verify === false){
          isEmpty=false;
        } 
        
      }) 
      const days = {seg:'', ter:'', qua:'', qui:'', sex:'', sab:''}

      if(training !== '' && isEmpty){
        const storage = await AsyncStorage.getItem("@Academia:Workouts");
        const workouts = storage ? JSON.parse(storage) : [];
        const storageWeek = await AsyncStorage.getItem("@Academia:Week");
        const week = storageWeek ? JSON.parse(storageWeek) : days;
        console.log(workouts)
        console.log(week)

        let newWeek = {
          seg:seg ? id : '',
          ter:ter ? id : '',
          qua:qua ? id : '',
          qui:qui ? id : '',
          sex:sex ? id : '',
          sab:sab ? id : '',
        }

        if(seg || ter || qua || qui || sex || sab){
          if(
            !(week.seg !== '' && newWeek.seg !== '') && !(week.ter !== '' && newWeek.ter !== '') && 
            !(week.qua !== '' && newWeek.qua !== '') && !(week.qui !== '' && newWeek.qui !== '') &&
            !(week.sex !== '' && newWeek.sex !== '') && !(week.sab !== '' && newWeek.sab !== '')            
          ){
            await AsyncStorage.setItem(
              "@Academia:Workouts",
              JSON.stringify([...workouts, newWorkout])
            );

            newWeek = {
              seg:seg ? id : week.seg,
              ter:ter ? id : week.ter,
              qua:qua ? id : week.qua,
              qui:qui ? id : week.qui,
              sex:sex ? id : week.sex,
              sab:sab ? id : week.sab,
            }  
            await AsyncStorage.setItem(
              "@Academia:Week",
              JSON.stringify(newWeek)
            );
            Alert.alert('Concluido','Treino salvo com sucesso!');
            navigation.navigate('Home')
          }else{
            Alert.alert('Já existe um treino nesse dia', 'Selecione um dia diferente para executar esse treino');
          }
        }else{
          Alert.alert('Não foi possível salvar treino','Selecione um dia');
        }
      }else{
        Alert.alert('Não foi possível salvar treino','Preencha todos os campos');
      }
    }catch (e) {
      console.log(e.message);
      
    } 
  } 

  const handleOnPressAddComponent = useCallback(() => {
    setCardsContent([...cardsContent, {title:"", series:'', repetition:''}]);
  }, [cardsContent])

  const handlePressRemoveComponent = (pos) => {
    const cardaux = [...cardsContent];
    cardaux.splice(pos,1)
    setCardsContent(cardaux)
  }

  const handlePressChange = (text, pos, prop) => {
    const cardaux = [...cardsContent];
    cardaux[pos][prop] = text;
    setCardsContent(cardaux);
  }
  
  const renderCardsContent = useCallback(()=> {
    return(
      cardsContent.map((item,index) => (
        <AddExercise
          object={cardsContent[index]}
          remove={handlePressRemoveComponent}
          changeValue={handlePressChange}
          key={index}
          pos={index}
        />

      ))
    )
  }, [cardsContent])

  return(
    <Background>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContainerSmallCardTraining>
            <SmallCardTraining 
              title={String.fromCharCode(65+numberCards)} 
              color={colors.smallCardTraining2}
            />
          </ContainerSmallCardTraining>
          <NameTrainingContainer>
              <TitleInput 
                style={{marginRight: 6}}
                maxLength={20}
              >
                Nome do Treino:
              </TitleInput>
              <TextBoxComponent
                style={{flex:1}}
                onChangeText={setTraining}
                value={training}
              />
          </NameTrainingContainer>
          {renderCardsContent()}
          <MoreButton onPress={handleOnPressAddComponent}>
            <Image
              source={ 
                require('../../Icons/mais.png') 
              }
            />  
          </MoreButton>
          <SelectDaysContainer>
            <TitleInput>Que dia(s) você fará esse treino?</TitleInput>
            <SelectDay>
              <Days 
                title="Seg" 
                onPress={() => setSeg(!seg)}
                focused={segSelected ? true : seg}
                disabled={segSelected}
                active={segSelected}

              />
              <Days 
                title="Ter" 
                onPress={() => setTer(!ter)}
                focused={terSelected ? true : ter}
                disabled={terSelected}
                active={terSelected}

              />
              <Days 
                title="Qua" 
                onPress={() => setQua(!qua)}
                focused={quaSelected ? true : qua}
                disabled={quaSelected}
                active={quaSelected}
              />
              <Days 
                title="Qui" 
                onPress={() => setQui(!qui)}
                focused={quiSelected ? true : qui}
                disabled={quiSelected}
                active={quiSelected}
              />
              <Days 
                title="Sex" 
                onPress={() => setSex(!sex)}
                focused={sexSelected ? true : sex}
                disabled={sexSelected}
                active={sexSelected}
              />
              <Days 
                title="Sab" 
                onPress={() => setSab(!sab)}
                focused={sabSelected ? true : sab}
                disabled={sabSelected}
                active={sabSelected}
              />
            </SelectDay>
          </SelectDaysContainer>
          <ConfirmButton 
            style={{marginBottom: bottom+24}}
            onPress={saveScreenData}
          
          />
        </ScrollView>
      </Container>
  </Background>
  )
}