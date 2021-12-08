import styled from "styled-components"

 export const Button= styled.button`
    border: 1px solid ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.color.red};
    color: ${({theme}) => theme.color.white};
    padding: 50px;
    font-size: ${({theme}) => theme.font.medium}
  
 ` 