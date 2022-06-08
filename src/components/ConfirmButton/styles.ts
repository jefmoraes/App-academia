import styled from "styled-components/native";

export const Container = styled.Pressable`
  align-self: center;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color:${props => props.theme.colors.icon};
  border-radius: 24px;
  background-color: ${props => props.theme.colors.timer};
  width: 48px;
  height: 48px;
`;

