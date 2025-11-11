import styled from "styled-components";

export const Image = styled.img<{
    margin?: boolean;
}>`
    width: 4rem;
    object-fit: cover;
    border-radius: 2rem;
`;
