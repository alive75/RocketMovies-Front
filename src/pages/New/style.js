import styled from "styled-components";

export const Container = styled.div`
    display: grid;
  grid-template-rows: max-content max-content 1fr;
  grid-template-areas: 
  "header"
  "top"
  "form"
  ;
  width: 100%;
  height: 100vh;

`

export const Top = styled.div`
    grid-area: top;
    padding: 40px 106px 24px 123px;
    
    button {
    color: ${({ theme }) => theme.COLORS.RED};
}
`


export const Form = styled.div`
    grid-area: form;
    overflow-y: auto;
    padding: 0 106px 0 123px;
    
    h1 {
    font-size: 36px;
    font-weight: 400;
margin-bottom:  40px;
}
    .col-2 {
    display: flex;
    width: 100%;
gap: 40px;
margin-bottom:  40px;
}

    textarea {

margin-bottom:  40px;
  flex-direction: row;
}

button {
margin: 0;
}
.delete {
background-color: ${({ theme }) => theme.COLORS.BLACK};
color: ${({ theme }) => theme.COLORS.RED};
}

`



