import styled from "styled-components/native";

export const Container = styled.View`
  margin: 14px;
  padding: 14px;
  background-color: ${props => props.theme.colors.cardtraining};
  border-radius: 15px;
`;

export const ButtonRemoveItem = styled.Pressable`
  position: absolute;
  right: -5px;
  top: -8px;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background-color: ${props => props.theme.colors.pause};
  border: 2px;
  border-color: ${props => props.theme.colors.icon};
  width: 22px;
  height: 22px;
`;

export const Line = styled.View`
  background-color: ${props => props.theme.colors.icon};
  border-radius: 1px;
  width: 10px;
  height: 2px;

`;

export const TitleInput = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 17px;
  font-weight: 500;
  margin: 14px 0 16px;
`;

export const Flex = styled.View`
  align-items: center;
`;

export const Flexcontainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const NumberContainer = styled.View`
  align-items: center;
  justify-content: center;
  border: 2px;
  border-color: ${props => props.theme.colors.icon};
  min-width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color:${props => props.theme.colors.textInput};
`;

export const BoxNumber = styled.TextInput`
  color: ${props => props.theme.colors.textInput2};
  font-size: 17px;  
  padding: 10px 8px;
`;

