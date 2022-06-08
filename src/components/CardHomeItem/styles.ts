import styled from "styled-components/native";

export const CardContainer = styled.Pressable`
  margin: 0 16px ;
  padding: 14px;
  border-color: ${props => props.theme.colors.icon};
  border-radius: 25px;
  min-width: 200px;
`;

export const SmallCardContainer = styled.View`
  flex-direction: row;
  margin-bottom: 14px;
`;

export const TextProfile = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

export const EditContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DaysContent = styled.View`
  flex-direction: row;

`;

export const ImageIconEdit = styled.Image`
`;
