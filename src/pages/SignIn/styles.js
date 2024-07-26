import styled from "styled-components"
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.div`
  padding: 223px 124px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.COLORS.RED};
    font-size: 48px;
    font-weight: bold;

  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200}
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    margin: 48px 0;
  }

  button {
color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

}
  span {
display: flex;
justify-content: center;
}
  span button {
    margin-top: 42px;
color: ${({ theme }) => theme.COLORS.RED};
  }


`
export const Background = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat center center;
background-size: cover;

`
