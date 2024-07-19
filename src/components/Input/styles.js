import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  
  margin-bottom: 8px;
  border-radius: 10px;
  
  > input {
    width: 340px;
    height: 56px;
    padding: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    border: none;
    background: transparent;
    font-size: 16px;

    &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > svg {
    margin-left: 16px;
  }
  
  `