import React from 'react'
import { SignIn } from './src/screen/SignIn'
import { View, Text, useColorScheme,StatusBar} from 'react-native'
import {ThemeProvider} from 'styled-components'
import themes from './src/global/styles/themes';
import { Background } from './src/components/Background';
import { Routes } from './src/Routes';
import { Home } from './src/screen/Home';
import { Training } from './src/screen/Training';

export default function App(){

const deviceTheme = useColorScheme();
const theme = themes['dark'] || themes.dark;

  return(
    <ThemeProvider theme={theme}>
      <StatusBar
        animated={true}
        barStyle='light-content'
        translucent
      />
        <Routes/>
    </ThemeProvider> 
  )
}

