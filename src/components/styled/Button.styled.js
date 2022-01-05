import styled from "styled-components"

 export const Button= styled.button`
    border: 1px solid ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.color.transparent};
    color: ${({theme}) => theme.color.white};
    padding: 15px 30px;
    font-size: ${({theme}) => theme.font.medium}
 ` 