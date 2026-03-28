"use client";

import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    animation: fadeIn 0.6s ease-in-out;

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
