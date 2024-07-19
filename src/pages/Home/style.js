import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr;
  grid-template-areas: 
  "header"
  "top"
  "content"
  ;
  width: 100%;
  height: 100vh;
  
`

export const Top = styled.div`
  grid-area: top;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 106px 0 124px;
  margin-bottom: 38px;
  
 
  h1 {
    font-size: 32px;
    font-weight: 400;
  }
  button {
    width: 207px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-weight: 400;
  }
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
  margin: 0 106px 58px 124px;

  
  
`
