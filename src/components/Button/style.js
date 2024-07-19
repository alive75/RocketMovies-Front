import styled from "styled-components";

export const Container = styled.button`
width: 100%;
height: 56px;

display: flex;
align-items: center;
justify-content: center;

background-color: ${({ theme }) => theme.COLORS.RED};
color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
font-weight: 500;

margin-top: 24px;
border: 0;
border-radius: 10px;



  > svg {
    margin-right: 2.5px;
  }
`