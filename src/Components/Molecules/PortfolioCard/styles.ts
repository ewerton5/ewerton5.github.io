import styled from "styled-components";

export const Card = styled.div`
    background: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition:
        transform 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    padding: ${({ theme }) => theme.spacings.small};
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const CardTitle = styled.h3`
    font-size: ${({ theme }) => theme.fonts.size.medium};
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacings.xsmall};
`;

export const CardDescription = styled.p`
    font-size: ${({ theme }) => theme.fonts.size.small};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.5;
    flex: 1;
    margin-bottom: ${({ theme }) => theme.spacings.small};
`;

export const CardLinks = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacings.small};
    margin-top: auto;

    a {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacings.xxsmall};
        color: ${({ theme }) => theme.colors.primary};
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
        font-size: ${({ theme }) => theme.fonts.size.xsmall};

        &:hover {
            text-decoration: underline;
        }
    }
`;
