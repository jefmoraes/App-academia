import styled from "styled-components/native";

export const Container = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background-color: ${props => props.theme.colors.colorbg2};
  border-radius: 12px;
  margin-right: 8px;
`;

export const Day = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 17px;
`;