import React, { ReactNode } from "react";

import Footer from "Components/Organisms/Footer";
import Navbar from "Components/Organisms/Navbar";

import { Container, Main } from "./styles";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <Main>{children}</Main>
            <Footer />
        </Container>
    );
};

export default MainLayout;
