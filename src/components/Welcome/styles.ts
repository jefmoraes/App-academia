import styled from "styled-components/native";

export const Container = styled.View`
  
`;

export const BellowHead = styled.View`
  margin-left: 16px;
  margin-top: 24px;
  margin-bottom: 16px;

`;
export const WelcomeTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 28px;
  font-weight:500;
  margin-bottom: 1px;
`;

export const WelcomeSubtitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 17px;
`;

