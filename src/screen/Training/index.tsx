import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  Container, 
  Infotraining, 
  TrainingTitle, 
  Block, 
  Timer, 
  TimerTitle, 
  ElementFlex, 
  ElementFlex2, 
  ElementFlex3, 
  CheckList, 
  DownMenu, 
  ButtonPage, 
  PageTitle,
  PageSubtitle,
  PageContainer,
  PageContent,
  Markgroup,

  Buttontimer,
  Body
} from "./styles"

import { SmallCardTraining } from '../../components/SmallCardTraining'
import { ArrowButton } from '../../components/ArrowButton'
import { Bookmark } from '../../components/Bookmark'
import { Check } from '../../Icons/Check'
import { ThemeContext } from 'styled-components/native'
import { Dimensions, Image, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import {Stopwatch} from 'react-native-stopwatch-timer';
import { Welcome } from '../../components/Welcome'
import { ConfirmButton } from '../../components/ConfirmButton'
import { Background } from '../../components/Background'
import { TrainingItem } from '../../components/TrainingItem'
import { TrainingHeader } from '../../components/TrainingHeader'
   
const { width: SCREEN_WIDTH } = Dimensions.get('screen');
const CARD_WIDTH =  SCREEN_WIDTH - 60;

export function Training({navigation, route}){
  const {workoutsHome,numberCards,itemLocation } = route.params;
  const workout = workoutsHome;
  const {colors} = useContext(ThemeContext)
  const { bottom } = useSafeAreaInsets();
  const [pages,setPages] = useState([]);
  const flatListRef = useRef(null);
  const [isStopwatchStart,setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [finalTime, setFinalTime] = useState()
  
  const handleTraining = () => {
    navigation.navigate('Home')
  }
  
  useEffect(() => {
    let vaux = [];
    let vauxTotal = [];
    workout.exercises.map((item,index) => {
      vaux.push(item);

      if(vaux.length === 5 || workout.exercises.length === index+1 ){
        vauxTotal = index === 4 ? [vaux] : [...vauxTotal, vaux];

        vaux=[];
      
      }
    })
    setPages(vauxTotal);  
  }, []);

  function handleOnPress(nextIndex){
    flatListRef.current?.scrollToIndex({index:nextIndex, animated:true})
  }

  function handleGetTime(time){ 
    console.log(time)
    setFinalTime(time)
  }

  return(
    <Background>
      <Container>
        <ScrollView>
          <Welcome 
            title='Olá jeferson'
            subtitle='bora treinar ?'
          />
          <Infotraining>
            <Block>
              <TrainingTitle>Treino de Hoje</TrainingTitle>
              <SmallCardTraining title={String.fromCharCode(65+itemLocation)} color={colors.smallCardTraining}/>
            </Block>
            <Block>
              <TrainingTitle>Número de exercícios</TrainingTitle>
              <SmallCardTraining title={`${workout.exercises.length}`} color={colors.smallCardTraining}/>
            </Block>
          </Infotraining>
          <Timer>
            <ElementFlex>
              <TimerTitle>Tempo</TimerTitle>
            </ElementFlex>
            <ElementFlex2>
              <Buttontimer 
                onPress={() => {
                  setIsStopwatchStart(!isStopwatchStart);
                  setResetStopwatch(false);
                }}
                style={{borderColor:!isStopwatchStart ? colors.timer : colors.pause}}
              >          
                <Body 
                  style={{backgroundColor: !isStopwatchStart ? colors.timer : colors.pause}}
                  size={40}
                >
                  <Image 
                    source={
                      !isStopwatchStart ? 
                        require('../../Icons/play.png') 
                      : 
                        require('../../Icons/pause.png') 
                    }
                    style={!isStopwatchStart && {marginLeft: 3 } }
                    resizeMode='stretch'
                  />
                </Body>
              </Buttontimer>
            </ElementFlex2>
            <ElementFlex2>
              <Buttontimer 
                  onPress={() => {
                    setIsStopwatchStart(false);
                    setResetStopwatch(true);
                  }}
                  style={{borderColor:colors.pause}}
                >          
                  <Body 
                    style={{backgroundColor:colors.pause}}
                    size={22}
                  />
                </Buttontimer>
            </ElementFlex2>
            <ElementFlex3>
              <Stopwatch
                start={isStopwatchStart}
                reset={resetStopwatch}
                options={{text:{fontSize:17, color:colors.text}}}  
                getTime={handleGetTime}
              />
            </ElementFlex3>
          </Timer>
          <CheckList>
          <FlatList
              ref={flatListRef}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              horizontal
              data={pages}
              keyExtractor={(_,index) => String(index)}
              renderItem={({item,index}) => {
                return(
                  <View style={{width:CARD_WIDTH}}>
                    <TrainingHeader/>
                    <FlatList
                      bounces={false}
                      data={item}
                      renderItem={({item}) =>(
                        <TrainingItem
                          key={item.id} 
                          exercise={item}
                          checkable
                        />
                      )}
                    />
                    <DownMenu>
                      <View>
                        { index!==0 && 
                          <ArrowButton 
                            directionArrow="arrowleft"
                            onPress={() => handleOnPress(index-1)}
                          />
                        }
                      </View>
                      <PageContainer>
                        <PageContent>
                          <ButtonPage>
                            <PageTitle>{index+1}</PageTitle>
                            <PageSubtitle>pag</PageSubtitle>
                          </ButtonPage>
                          <Markgroup>
                            {pages.map((item,pos) =>(
                              <Bookmark 
                                key={pos}
                                fill={index === pos} 
                                style={{marginHorizontal:1.5}}/>
                            ))}
                          </Markgroup>
                        </PageContent>

                        {index+1!==pages.length && 
                          <ArrowButton directionArrow="arrowright"
                            onPress={() => handleOnPress(index+1)}
                          />
                        }
                      </PageContainer>
                    </DownMenu>   
                  </View> 
                )
              }}
            />          
          </CheckList>
          <ConfirmButton 
            style={{marginBottom: bottom+24}}
            onPress={handleTraining}
          />     
        </ScrollView>
      </Container>
    </Background>
  )
}