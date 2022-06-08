import { ThemeConsumer } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
  
export const TitleCard = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size:  17px;

`;

export const InfoUser = styled.View`
  flex-direction: row;
  padding: 14px;
  background-color: ${props => props.theme.colors.cardtraining};
  margin: 0 14px;
  border-radius: 25px;
`;




