import React from 'react'
import { View,Text,Image  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import {Container, Content, Title, SubTitle, ImagemLua, RedirectLua,RedirectDesenho, ImagemDesenho, StartButton, TextStart} from './styles'
import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native'



export function SignIn({navigation}){
  const handleSignIn = () =>{
    navigation.navigate('Training');
  }
  return(
    <Background>
      <Container>
        <Content>
          <Title>Comece a se mover</Title>
          <SubTitle>Moonvement</SubTitle>
        </Content>

        <RedirectLua>
          <ImagemLua source={require("../../assets/lua.png")} 
            resizeMode='stretch'
          />
        </RedirectLua> 
        
        <RedirectDesenho>
          <ImagemDesenho source={require("../../assets/academia.png")} 
            resizeMode='stretch'
          />
        </RedirectDesenho>
        <StartButton onPress={handleSignIn}>
          <TextStart>Get Started</TextStart>
        </StartButton>
      </Container>
    </Background>

  )
}