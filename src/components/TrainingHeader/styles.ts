import styled from "styled-components/native";

export const Content = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
`;

export const LeftContent = styled.View`
  flex: 2;
`;

export const RightContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TrainingHeaderTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 17px;
  font-weight: bold;
`;