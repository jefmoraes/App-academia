import React, {useCallback, useContext, useEffect, useRef, useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { SmallCardTraining } from "../../components/SmallCardTraining";
import {Days} from '../../components/Days'

import {
  Container,
  ProfileContainer,
  Profile,
  TextProfile,
  TextContaianerProfile,
  ProfileImage,
  CardContainer,
  SmallCardContainer,
  EditContainer,
  ImageIconEdit,
  DaysContent,
  CardFooter,
  LineHorizontal,
  LineVertical,
  CardPreTraining,
  StartTraining,
  StartTrainingTitle,
  ButtonGo



} from './styles'

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext, useTheme } from "styled-components/native";
import { View, Text, Dimensions, Alert } from "react-native";
import { ConfirmButton } from "../../components/ConfirmButton";
import { CardHomeItem } from "../../components/CardHomeItem";
import { TrainingItem } from "../../components/TrainingItem";
import { TrainingHeader } from "../../components/TrainingHeader";
import { AntDesign } from '@expo/vector-icons';
const { width: SCREEN_WIDTH } = Dimensions.get('screen');


export function Home({navigation,route}){
  const routeProps = route.params;
  const { top } = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [week, setWeek] = useState({});
  

  async function loadData() {
    try {
      const days = {seg:'', ter:'', qua:'', qui:'', sex:'', sab:''}
      const storage = await AsyncStorage.getItem("@Academia:Workouts")
      const workoutsAux =  storage ? JSON.parse(storage) : [];
      setWorkouts(workoutsAux)
      const storageWeek = await AsyncStorage.getItem("@Academia:Week")
      const weekAux = storageWeek ? JSON.parse(storageWeek) : days;
      setWeek(weekAux)
    } catch (error) {

    } finally {
      setLoading(false)

    } 
  }
  /*Primeira coisa pra ser mostrada na tela*/
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if(routeProps){
        Alert.alert(`${routeProps.nameTraining} excluido com Sucesso`)
      }
      loadData()
    });
    return unsubscribe;

  },[navigation])

  function handleOnPressChangeTraining(pos){
    flatListRef.current?.scrollToIndex({index:pos, animated:true})
  }
  
  function handleOnPress(){
    navigation.navigate('CreateTraining',{ numberCards:workouts.length, week:week})
  }
  
  function handleOnPressEditTraining(pos){
    navigation.navigate('EditTraining',{ numberCards:workouts.length, weekHome:week, workoutsHome:workouts[pos],itemLocation:pos})
  }

  function handleOnPressStartTraining(pos){
    navigation.navigate('Training',{ numberCards:workouts.length, workoutsHome:workouts[pos],itemLocation:pos})
  }
  

  

  return(
    <Background> 
      <Container>
        <ProfileContainer style={{marginTop:top+24}}>
          <Profile>
            <ProfileImage
              source={require('../../assets/jef.png')}
            />
          </Profile>
          <TextContaianerProfile>
            <TextProfile>Hi </TextProfile>
            <TextProfile>Jeferson </TextProfile>
          </TextContaianerProfile>
        </ProfileContainer>
        
        <FlatList
          style={{marginBottom:24, marginTop:24 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={workouts}
          renderItem={({item,index}) => {
            return(
              <CardHomeItem
                focused={focusedIndex === index}
                changeList={handleOnPressChangeTraining}
                pos={index}
                title={item.title}
                setChangeIndex={setFocusedIndex}
                weekDay={week}
                id={item.id}
                goToEdit={handleOnPressEditTraining}
              />
           )}}
          ListFooterComponent={() =>{
            
            return(
              (workouts.length < 6 || workouts===[]) &&
              <CardFooter onPress={handleOnPress}>
                <LineHorizontal/>
                <LineVertical/>
              </CardFooter>
          )}}
        />
        <FlatList
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          data={workouts}
          renderItem={({item, index}) => {
            
            return(
              <View style={{width:SCREEN_WIDTH}}>
                <CardPreTraining>
                  <TrainingHeader/>
                  <FlatList
                    scrollEnabled={false}
                    data={item.exercises.slice(0,5)}
                    renderItem={({item,index}) =>{
                      return(
                        <TrainingItem  
                          exercise={item}
                          key={index}
                        />
                      )
                    }}
                  />
                  <StartTraining onPress={() => handleOnPressStartTraining(index)}>
                    <StartTrainingTitle>Começar Treino</StartTrainingTitle>
                    <ButtonGo name="rightcircle" size={20} color={colors.icon} />
                  </StartTraining>
                </CardPreTraining>
              </View>
            )
          }}
        />
      </Container>
    </Background>
  )
}