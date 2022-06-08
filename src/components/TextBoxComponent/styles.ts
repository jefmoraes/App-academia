import styled from "styled-components/native";


export const TextBox = styled.View`
  background-color: ${props => props.theme.colors.icon};
  padding: 4px 14px;
  border-radius: 16px;
`;

export const TextBoxInput = styled.TextInput`
  font-size: 17px;
  color: ${props => props.theme.colors.textInput};
`;
