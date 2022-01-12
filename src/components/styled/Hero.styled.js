import styled from "styled-components";


export const Wrapper = styled.div`
 background-image: url('../../../../../assets/hero.png');
background-position: bottom-right;
background-repeat: no-repeat;
background-size: cover;
height: 600px;
background-color: ${({theme}) => theme.color.peach};
color: ${({theme}) => theme.color.white};
display: flex;
// justify-content: sp;
align-items: center;
justify-content: space-evenly;

`