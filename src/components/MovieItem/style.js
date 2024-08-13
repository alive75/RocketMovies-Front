import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 40px;
  padding-right: 16px;


  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  
  border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
  border-radius: 10px;

  > button {
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.RED};
}

  >input{
  width: auto;
  height: 56px;
  border: none;
  background: transparent;

  padding: 16px;


  color: ${({ theme }) => theme.COLORS.WHITE_100};
  
  &::placeholder {
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  }

}
 
`

