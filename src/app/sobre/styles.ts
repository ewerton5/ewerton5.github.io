import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    animation: fadeIn 0.5s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const PageTitle = styled.h1`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacings.large};
`;
