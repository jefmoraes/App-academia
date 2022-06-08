import styled from "styled-components/native";

export const Container = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 12px;
  align-items: center;
  justify-content:center;
`;

export const Title = styled.Text`
  color:${props => props.theme.colors.text};
  font-weight:600;
`;