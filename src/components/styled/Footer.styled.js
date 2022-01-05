import styled from "styled-components"



export const FooterStyled = styled.footer`
display: flex;
justify-content: space-evenly;
align-items: center;
color: ${({theme}) => theme.color.white};
background-color: ${({theme}) => theme.color.black};
font-size: 18px;
`
