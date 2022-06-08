import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const ContainerSmallCardTraining = styled.View`
  margin-top: 28px;
  margin-bottom: 12px;
  align-items: center;
`;

export const NameTrainingContainer = styled.View`
  padding: 28px 14px;
  flex-direction: row;
  background-color: ${props => props.theme.colors.cardtraining};
  align-items: center;
  margin: 14px;
  border-radius: 15px;
`;

export const TitleInput = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 17px;
  font-weight: 500;
`;

export const SeriesRepetitionsContainer = styled.View`
  flex-direction: row;
  justify-content:space-between; 
`;

export const MoreButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: ${props => props.theme.colors.icon};
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin: 12px 0 12px;
`;

export const SelectDaysContainer = styled.View`
  margin: 12px 14px 24px;
  margin-bottom: 28px;
`;

export const SelectDay = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;  
`;
