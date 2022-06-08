import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
`;

export const Infotraining = styled.View`
  background-color:${props => props.theme.colors.cardtraining} ;
  border-radius: 22px;
  margin: 0 16px;
  padding: 14px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Block = styled.View`
  align-items: center;
`;

export const TrainingTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 17px;
  margin-bottom: 18px;
`;

export const Timer = styled.View`
  flex-direction: row;
  margin: 16px 30px 16px;
`;

export const TimerTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 17px;
`;

export const ElementFlex = styled.View`
  justify-content: center;
  flex: 1;
`;

export const ElementFlex2 = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
`;

export const Buttontimer = styled.Pressable`
  border-width: 2px;
  border-radius: 24px;
`; 

export const Body = styled.View`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: ${props => props.size/2}px;
  margin:2px;
  align-items: center;
  justify-content: center;
`;

export const PlayIcon = styled.Image`

`;

export const ElementFlex3 = styled.View`
  justify-content: center;
  flex: 1;
  align-items: flex-end;
`;

export const CheckList = styled.View`
  padding: 14px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.cardtraining};
  margin: 0 16px 24px;
`;

export const DownMenu = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;

`;

export const ButtonPage = styled.View`
  background-color: ${props => props.theme.colors.colorbg2};
  padding: 4px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 2px;
`;

export const PageTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
`;

export const PageSubtitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 12px;
`;

export const PageContainer = styled.View`
  flex-direction:row;
  align-items: center;
`;

export const PageContent = styled.View`
  align-items: center;
  margin-right: 8px; 
`;

export const Markgroup = styled.View`
  flex-direction: row;
`;



