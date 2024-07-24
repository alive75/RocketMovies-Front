import styled from "styled-components";

export const Container = styled.div`

margin-bottom:  40px;

    h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 24px;
    }

    .tag-group {
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    height: 88px;
    border-radius: 8px;
    padding: 16px;

}

    
`
