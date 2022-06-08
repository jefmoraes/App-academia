import { Container } from "./styles"

import { Chevron } from "../../Icons/Chevron";
import { useHeaderHeight } from "../../utils/heights";

export function BackButton({navigation}){
  const headerHeight = useHeaderHeight();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <Container onPress={handleGoBack} style={{height:headerHeight}}>
      <Chevron/>
    </Container>

  )
}