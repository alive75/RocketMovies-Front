import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  height: 116px;
  width: 100%;

  padding: 24px 123px;

  display: flex;
  gap: 64px;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};

  input {
  padding: 19px 24px;
  font-size: 14px;
  height: 56px;
  width: auto;
  margin: 0;
 }
`

export const Brand = styled.div`
  button {
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.RED};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 198px;

  
   img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
    margin-left: 9px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: right;
    width: 125px;

    a {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    }

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_200}
    }

  }

`