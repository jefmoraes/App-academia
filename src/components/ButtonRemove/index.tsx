import React from "react";
import { Alert } from "react-native";
import { useTraining } from "../../hooks/training";
import { useHeaderHeight } from "../../utils/heights";
import { RemoveButton, RemoveTrainingContent, Container } from "./styles";

export function ButtonRemove({navigation}){

  const {handleRemoveTraining, itemLocation} = useTraining();
  const headerHeight = useHeaderHeight();

  const handleOnPressRemoveTraining = async () => {
    try{ 
      await handleRemoveTraining();
      navigation.navigate('Home', {
        nameTraining: String.fromCharCode(65+itemLocation)
      })
    }catch{

    }
  }

  const handleOnPress = () => {
    Alert.alert(
      'Deseja excluir Todo o Treino',
      'Isso removerá de forma permanente seu Treino',
      [
        {text: 'Sim', onPress: handleOnPressRemoveTraining},
        {text: 'Não', onPress: () => console.log('No button clicked'), style: 'cancel'},
      ],
      { 
        cancelable:false 
      }
    );
  }

  return(
    <Container 
      style={{height:headerHeight}}
      onPress={handleOnPress}
    >
      <RemoveTrainingContent>
        <RemoveButton name="close" size={14}/>
      </RemoveTrainingContent>
    </Container>
  )
}