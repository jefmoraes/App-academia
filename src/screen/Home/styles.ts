import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  
`;

export const ProfileContainer  = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Profile = styled.View`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  margin: 0 14px 0 16px;
  align-items: center;
`;

export const ProfileImage = styled.Image`
`;

export const TextContaianerProfile = styled.View`
  flex-direction: column;
`;

export const TextProfile = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

export const CardContainer = styled.Pressable`
  margin: 0 16px ;
  background-color: ${props => props.theme.colors.cardNotSelected};
  padding: 14px;
  border-color: ${props => props.theme.colors.icon};
  border-radius: 25px;
  min-width: 200px;
`;


export const SmallCardContainer = styled.View`
  flex-direction: row;
  margin-bottom: 14px;
`;

export const DaysContent = styled.View`
  flex-direction: row;

`;

export const EditContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageIconEdit = styled.Image`
  height: 24px;
  width: 24px;
`;

export const CardFooter = styled.Pressable`
  margin: 0 16px ;
  background-color: ${props => props.theme.colors.cardNotSelected};
  border-radius: 25px;
  width: 200px;
  height: 140px;
  align-items: center;
  justify-content: center;
`;

export const CardPreTraining = styled.View`
  padding: 14px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.cardtraining};
  margin: 48px 16px 24px;
  border-width: 0.5px;
  border-color: ${props => props.theme.colors.icon}; 
`;

export const StartTraining = styled.Pressable`
  flex-direction: row;
  align-self: center;
  background-color: ${props => props.theme.colors.start};
  padding: 14px;
  border-radius: 24px;
  margin-top: 24px;
  align-items: center;
  justify-content: center;

`;

export const StartTrainingTitle = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  margin-right: 14px;
`;

export const ButtonGo = styled(AntDesign).attrs((props) =>({
  color:props.theme.colors.icon
}))`
  font-size: 17px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  margin-right: 14px;
`;


export const LineHorizontal = styled.View`
  position: absolute;
  background-color: ${props => props.theme.colors.icon}; 
  width: 25px;
  height: 5px;
  border-radius: 12px;
`;

export const LineVertical = styled.View`
  background-color: ${props => props.theme.colors.icon}; 
  width: 5px;
  height: 25px;
  border-radius: 2px;
`;