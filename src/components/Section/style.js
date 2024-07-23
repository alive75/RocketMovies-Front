import styled from "styled-components";

export const Container = styled.div`

    margin: 40px 0;

    h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 24px;
    }

    div .tags {
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    width: 100%;
    height: 88px;
    border-radius: 8px;
    padding: 16px;
}

    
`
