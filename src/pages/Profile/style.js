import styled from "styled-components" 

export const Container = styled.div`

  header {
    display: flex;
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};

    button {
      padding-left: 144px;
      color: ${({ theme }) => theme.COLORS.RED};
      
    }
  }
`
export const Form = styled.div`
  max-width: 340px;
  margin: auto;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;

  margin: -92px auto 64px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.RED};
    border-radius: 50%;

    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 8px;
    right: 8px;

    cursor: pointer;
  }

  input {
    display: none;
  }

  svg {
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }

`
