import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Alert, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "styled-components/native";
import { AddExercise } from "../../components/AddExercise";
import { Background } from "../../components/Background";
import { ConfirmButton } from "../../components/ConfirmButton";
import { Days } from "../../components/Days";
import { SmallCardTraining } from "../../components/SmallCardTraining";
import { TextBoxComponent } from "../../components/TextBoxComponent";
import { MoreButton } from "../CreateTraining/styles";

import { 
  Container,
  ContainerSmallCardTraining,
  NameTrainingContainer, 
  SelectDay, 
  SelectDaysContainer,
  TitleInput,
} from "./styles";

import uuid from 'react-native-uuid';
import { FlatList } from "react-native-gesture-handler";
import { useTraining } from "../../hooks/training";


export function EditTraining({navigation,route}){
  const {numberCards, weekHome, workoutsHome, itemLocation} = route.params;
  const [cardsContent, setCardsContent] = useState(workoutsHome.exercises); 
  const {bottom, top} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);
  const [training, setTraining] = useState(workoutsHome.title);
  const [seg, setSeg] = useState (weekHome.seg === workoutsHome.id);
  const [ter, setTer] = useState (weekHome.ter === workoutsHome.id);
  const [qua, setQua] = useState (weekHome.qua === workoutsHome.id);
  const [qui, setQui] = useState(weekHome.qui === workoutsHome.id);
  const [sex, setSex] = useState (weekHome.sex === workoutsHome.id);
  const [sab, setSab] = useState (weekHome.sab === workoutsHome.id);
  const segSelected = weekHome.seg !== workoutsHome.id && weekHome.seg !== '' ;
  const terSelected = weekHome.ter !== workoutsHome.id && weekHome.ter !== '' ;
  const quaSelected = weekHome.qua !== workoutsHome.id && weekHome.qua !== '' ;
  const quiSelected = weekHome.qui !== workoutsHome.id && weekHome.qui !== '' ;
  const sexSelected = weekHome.sex !== workoutsHome.id && weekHome.sex !== '' ;
  const sabSelected = weekHome.sab !== workoutsHome.id && weekHome.sab !== '' ;
  const {loadData, woukoutBd, week, handleSetItemLocation} = useTraining();

  const id = workoutsHome.id
  useEffect(() =>{
    loadData();
    handleSetItemLocation(itemLocation);
    
  }, [])

  

  const saveScreenData = async () => {
    try {
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
      if(training !== '' && isEmpty){
    
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
            !(week.sex !== '' && newWeek.sex !== '') && !(week.sab !== '' && newWeek.sab !== '') || 
            (week.seg === id) || (week.ter === id)||(week.qua === id)|| (week.qui === id) ||
            (week.sex === id )|| (week.sab === id )     
          ){
            let workout = woukoutBd;
            workout[itemLocation] = newWorkout;
            await AsyncStorage.setItem(
              "@Academia:Workouts",
              JSON.stringify(workout)
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
            console.log(woukoutBd)
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
            title={String.fromCharCode(65+itemLocation)} 
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
              active={segSelected}
              disabled={segSelected}
            />
            <Days 
              title="Ter" 
              onPress={() => setTer(!ter)}
              focused={terSelected ? true : ter}
              active={terSelected}
              disabled={terSelected}
              

            />
            <Days 
              title="Qua" 
              onPress={() => setQua(!qua)}
              focused={quaSelected ? true : qua}
              active={quaSelected}
              disabled={quaSelected}
            />
            <Days 
              title="Qui" 
              onPress={() => setQui(!qui)}
              focused={quiSelected ? true : qui}
              active={quiSelected}
              disabled={quiSelected}
            />
            <Days 
              title="Sex" 
              onPress={() => setSex(!sex)}
              focused={sexSelected ? true : sex}
              active={sexSelected}
              disabled={sexSelected}
            />
            <Days 
              title="Sab" 
              onPress={() => setSab(!sab)}
              focused={sabSelected ? true : sab}
              active={sabSelected}
              disabled={sabSelected}
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