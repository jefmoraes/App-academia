import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  align-items: flex-end;
  justify-content: center;
  margin-right: -16px;
  padding-right: 16px;
  width: 60px;
`;

export const RemoveTrainingContent = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.colors.pause}; 
  border-width: 1px;
  border-color: ${props => props.theme.colors.icon}; 
`;

export const RemoveButton = styled(AntDesign).attrs((props) => ({
  color:props.theme.colors.icon
}))`
`;