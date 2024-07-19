import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE_200};

  border: none;
  resize: none;

  padding: 16px;
  margin-bottom: 8px;
  border-radius: 10px;

  &:placeholder {

  color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

`