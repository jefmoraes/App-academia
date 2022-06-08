import React from "react";
import { Background } from "../../components/Background";
import { TextBoxComponent } from "../../components/TextBoxComponent";
import { Welcome } from "../../components/Welcome";
import { Container, InfoUser, TitleCard} from "./styles";

export function Register(){
  return(
    <Background>
      <Container>
        <Welcome
          title="Hora de treinar"
          subtitle="Vamos começar !"
        />
        <InfoUser>
          <TitleCard>Seu Nome</TitleCard>
          
        </InfoUser>

       
      </Container>
    </Background>
  )
}