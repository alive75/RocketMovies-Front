import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
  background-color: hsl;
  border: none;
  border-radius: 16px;
  padding: 32px;

  margin-bottom: 24px;

  h1 {
    font-size: 24px;
    text-align: left;
    align-items: flex-start;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin: 15px 0;
    display: flex;
  }

  > footer {
    width: 100%;
    display: flex;
  }
`