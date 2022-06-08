import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { ThemeConsumer } from "styled-components";

export const Container = styled.Pressable`
  background-color:${props => props.theme.colors.colorbg2};
  border-radius: 10px;
  padding: 4px 8px;
 
`;

export const Arrow = styled(AntDesign).attrs((prosps) =>({
  color:prosps.theme.colors.icon
}))`
 



`; 