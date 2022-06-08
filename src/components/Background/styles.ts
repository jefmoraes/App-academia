import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export const Gradient = styled(LinearGradient).attrs((props) => ({
    colors:[props.theme.colors.colorbg2,props.theme.colors.colorbg3]
}))`
    flex: 1;
`;