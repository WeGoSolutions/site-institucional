import React, { useEffect } from 'react';
import waveImg from "../../assets/wave.svg";
import waveReverseImg from "../../assets/wavereverse.svg";
import linkExtImg from "../../assets/linkExt.svg";

import { GlobalStyle, Navbar, Logo, Ul, Anchor, SectionOne, Title, H1, H2, Baloons, Baloon, SectionTwo, ContainerLeft, Left, H11, P, Right, ContainerRight, LogoTitle, LogoTitleH1, SectionThree, H12, Card, Wave, SectionFour, Container, LeftContainer, H13, P1, Button, LinkExt, ProjectImages, SectionFive, WaveReverse, Shortcuts, UlShortcuts, Copyright, Map } from "./style";

const Home = () => {
    useEffect(() => {
        const element = document.getElementById("typing");
        const texts = ["WeGo", "Nós vamos"];
        let index = 0, charIndex = 0, isDeleting = false;

        function typeEffect() {
            if (element) {
                element.textContent = texts[index].substring(0, charIndex);
                charIndex += isDeleting ? -1 : 1;
                let speed = isDeleting ? 100 : 150;

                if (charIndex < 0) {
                    isDeleting = false;
                    index = (index + 1) % texts.length;
                    speed = 500;
                } else if (charIndex > texts[index].length) {
                    isDeleting = true;
                    speed = 1000;
                }

                setTimeout(typeEffect, speed);
            }
        }

        typeEffect();
    }, []);

    return (
        <>
            <GlobalStyle />
            <Navbar>
                <Logo>
                    <div>we</div>
                    <div>go</div>
                </Logo>
                <Ul>
                    <li><Anchor href="#sobre-nos">Sobre nós</Anchor></li>
                    <li><Anchor href="#equipe">Equipe</Anchor></li>
                    <li><Anchor href="#petinder">Projeto</Anchor></li>
                    <li><Anchor href="#petinder">PeTinder</Anchor></li>
                </Ul>
            </Navbar>

            <SectionOne>
                <Title>
                    <H2>Juntos</H2>
                    <H1 id="typing" className="typing-effect"></H1>
                    <H2>em direção ao futuro.</H2>
                </Title>

                <Baloons>
                    <Baloon>Inovação</Baloon>
                    <Baloon>Soluções</Baloon>
                    <Baloon>Inteligência</Baloon>
                </Baloons>
            </SectionOne>

            <SectionTwo id='sobre-nos'>
                <ContainerLeft>
                    <Left>
                        <H11>WeGo Solutions</H11>
                        <P>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex maxime maiores quam, voluptates quibusdam facere aut quisquam      dignissimos possimus, neque ipsum, eaque ea tempora reiciendis autem accusantium voluptatem placeat adipisci.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptatum sunt excepturi sequi atque dignissimos odit reiciendis neque eos iure! Ab cumque, assumenda illo alias qui sint voluptatem nemo quos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit tempora recusandae cumque, at quo sed. Quod corrupti, iure ipsum nesciunt quia obcaecati rerum non voluptates doloribus ullam, harum a?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis distinctio dolor deleniti ea nisi aut repellat non rem cupiditate assumenda? A eveniet, quidem excepturi cumque error laudantium alias exercitationem quia.

                        </P>
                    </Left>

                    <Right>
                        <ContainerRight>
                            <LogoTitle>
                                <LogoTitleH1>We</LogoTitleH1>
                                <LogoTitleH1>Go</LogoTitleH1>
                            </LogoTitle>
                        </ContainerRight>
                    </Right>
                </ContainerLeft>
            </SectionTwo>

            <SectionThree id='equipe'>
                <H12>Equipe</H12>
                <Card></Card>
                <Wave src={waveImg}></Wave>
            </SectionThree>

            <SectionFour id='petinder'>
                <Container>
                    <LeftContainer>
                        <H13>Conheça o PeTinder</H13>
                        <P1>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex maxime maiores quam, voluptates quibusdam facere aut quisquam      dignissimos possimus, neque ipsum, eaque ea tempora reiciendis autem accusantium voluptatem placeat adipisci.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptatum sunt excepturi sequi atque dignissimos odit reiciendis neque eos iure! Ab cumque, assumenda illo alias qui sint voluptatem nemo quos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit tempora recusandae cumque, at quo sed.
                        </P1>

                        <Button>
                            Entrar no PeTinder
                            <LinkExt src={linkExtImg}></LinkExt>
                        </Button>
                    </LeftContainer>

                    <ProjectImages></ProjectImages>
                </Container>
            </SectionFour>

            <SectionFive>
                <WaveReverse src={waveReverseImg}></WaveReverse>
                <Shortcuts>
                    <UlShortcuts>
                        <li><Anchor href="">WeGo</Anchor></li>
                        <li><Anchor href="#sobre-nos">Sobre nós</Anchor></li>
                        <li><Anchor href="#equipe">Equipe</Anchor></li>
                        <li><Anchor href="#projeto">Projeto</Anchor></li>
                        <li><Anchor href="#petinder">PeTinder</Anchor></li>
                    </UlShortcuts>

                    <Copyright>© WeGo Solutions</Copyright>
                </Shortcuts>

                <Map>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2874821816254!2d-46.66418892378846!3d-23.55811636147456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d2b063f663%3A0xc567c0d16d0bc582!2sS%C3%A3o%20Paulo%20Tech%20School!5e0!3m2!1spt-BR!2sbr!4v1741144649786!5m2!1spt-BR!2sbr"
                        style={{
                            border: '7px solid #D4D9EE',
                            borderRadius: '10px',
                            width: '80%',
                            height: '60%',
                            marginTop: '10%',
                            marginLeft: '-15%'
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Map>
            </SectionFive>
        </>
    );

};

export default Home;