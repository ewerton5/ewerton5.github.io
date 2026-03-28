"use client";

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
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
