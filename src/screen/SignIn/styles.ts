import styled from 'styled-components/native';


export const Container= styled.View`
    flex:1;

`;

export const Content= styled.View`
    margin-top:87px;
    margin-left:37px;
    align-items:flex-start;

`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.text};
    font-size:17px;
    margin-bottom:1px;

   
`;

export const SubTitle = styled.Text`
    color: #FFFFFF;
    font-size: 38px;
    font-weight: bold;
`;

export const RedirectLua = styled.View`
    margin-left:40px;
    margin-bottom:21px;
    margin-top:33px;

`;

export const ImagemLua = styled.Image`
    width:194px;
    height:194px;

`;

export const RedirectDesenho = styled.View`
    align-items:center;
    justify-content:center;
`;

export const ImagemDesenho = styled.Image`
    width:237px;
    height:245px;
    margin-bottom:95px;

`;

export const StartButton =styled.Pressable`
    align-self: center;
    align-items: center;
    background-color: ${props => props.theme.colors.colorbg2};
    border-radius: 13px;
    padding: 14px 54px;
   

`;

export const TextStart = styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 17px;
`;