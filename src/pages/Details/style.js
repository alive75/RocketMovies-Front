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
    padding: 40px 106px 24px 123px;
    
    button {
    color: ${({ theme }) => theme.COLORS.RED};

`
export const Content = styled.div`
    grid-area: content;
    overflow-y: auto;
    padding: 0 106px 156px 123px;

.title {
    display: flex;
    align-items: center;
    gap: 10px;
    
    h1 {
    font-size: 36px;
    font-weight: 500;
    line-height: 48px;
    margin-right: 9px

    }
    img {
    width: 20px;
    height: 20px;
    }
}

  p {
    display: flex;
    gap: 8px;
    margin-top: 24px;
    margin-bottom: 40px;
    
    img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right:
    }

    svg {
    color: ${({ theme }) => theme.COLORS.RED}
    }
  }

    span {
    display: flex;
    text-align: center;
    width: 100%;
    height: 30px;
    
    > div {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    
    > p{
    text-align: center;
}

}

}


.description {
    > p {
    text-align: justify;
    line-height: 22px;
    }
}
`
