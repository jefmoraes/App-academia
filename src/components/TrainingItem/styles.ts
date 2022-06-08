import styled from "styled-components/native";

export const Training = styled.View`
  flex-direction: row;
`;

export const LeftContent = styled.View`
  flex: 2;
`;

export const TrainingButton =  styled.Pressable`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
`;

export const TrainingLabel = styled.Text`
  flex-shrink: 1;
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  margin-left: 8px;
`;

export const RightContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;


