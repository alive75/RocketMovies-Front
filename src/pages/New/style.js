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
}
    .col-2 {
    display: flex;
    width: 100%;
    gap: 40px;
    margin: 40px 0;
}

    textarea {
    margin-bottom: 0;
}

`

export const Section = styled.div`


`
