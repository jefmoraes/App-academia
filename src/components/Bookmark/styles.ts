import styled from "styled-components/native";

export const Container = styled.View`
  height: ${props => props.bola}px;
  width: ${props => props.bola}px;
  border-radius: ${props => props.bola/2}px;
  background-color: ${props => props.theme.colors.icon};
  border-width:1px;
  
`;