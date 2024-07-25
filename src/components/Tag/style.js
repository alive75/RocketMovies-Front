import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;


  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  border-radius: 8px;

  margin-right: 8px;
  
  p {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    margin: 5px 16px;
  }
`
