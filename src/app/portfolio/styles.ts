import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const PageTitle = styled.h1`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacings.large};
`;

export const PortfolioGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacings.medium};
`;
