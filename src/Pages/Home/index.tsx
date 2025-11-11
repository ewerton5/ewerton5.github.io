import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "Components/Atoms/Button";
import MainLayout from "Components/Templates/MainLayout";
import profile from "data/profile.json";

import {
    Container,
    Section,
    Content,
    Image,
    Title,
    Subtitle,
    ButtonWrapper
} from "./styles";

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <MainLayout>
            <Container>
                <Section>
                    <Content>
                        <Title>
                            Olá, eu sou <span>{profile.name}</span>
                        </Title>
                        <Subtitle>{profile.title}</Subtitle>
                        <ButtonWrapper>
                            <Button
                                size="LARGE"
                                rounded
                                onClick={() => navigate("/portfolio")}
                            >
                                Ver Projetos
                            </Button>
                            <Button
                                size="LARGE"
                                rounded
                                hierarchy="secondary"
                                onClick={() => navigate("/contato")}
                            >
                                Entrar em Contato
                            </Button>
                        </ButtonWrapper>
                    </Content>
                    <Image src={profile.profilePicture} alt={profile.name} />
                </Section>
            </Container>
        </MainLayout>
    );
};

export default Home;
