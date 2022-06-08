import React, { useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import {Training} from "../screen/Training"
import {CreateTraining} from "../screen/CreateTraining"
import {SignIn} from "../screen/SignIn"
import { ThemeContext } from "styled-components/native";
import { Home } from "../screen/Home";
import { NavigatorIOS } from "react-native";
import {EditTraining} from '../screen/EditTraining'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from "@expo/vector-icons";
import { BackButton } from "../components/BackButton";
import { TrainingProvider } from "../hooks/training";
import { ButtonRemove } from "../components/ButtonRemove";
import { Register } from "../screen/Register";

type RootStackParams={
  CreateTraining: undefined;
  EditTraining: undefined;
  SignIn: undefined;
  Training: undefined;
  Home: undefined;
  Register: undefined;
}
const {Navigator, Screen } = createNativeStackNavigator();
export function AuthRoutes(){
  const {colors} = useContext(ThemeContext)
  
  return(
    <TrainingProvider>
      <Navigator
        initialRouteName="Register"
        screenOptions={(props) =>({
          contentStyle:{backgroundColor:colors.colorbg2},
          headerStyle:{backgroundColor:colors.colorbg2},
          headerBackTitleVisible:false,
          headerTitleStyle:{color:colors.text},
          headerTitleAlign:"center",
          headerShadowVisible:false,
          headerLeft: () => <BackButton {...props}/>,
        })}
      >
        <Screen
        options={{
          headerShown:false
        }}
          name="SignIn"
          component={SignIn}
        />
        <Screen
          name="Register"
          component={Register}
        />
        <Screen
          options={{
            headerShown:false
          }}
          name="Home"
          component={Home}
        />
        <Screen
          name="Training"
          component={Training}
        />
        <Screen
          name="CreateTraining"
          component={CreateTraining}
        />
        <Screen
          options={(props) => ({
            headerRight: () => <ButtonRemove {...props}/>,
          })}
          name="EditTraining"
          component={EditTraining}
        />
      </Navigator>
    </TrainingProvider>
  )
}