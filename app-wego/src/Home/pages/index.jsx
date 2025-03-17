import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import waveImg from "../../assets/wave2.svg";
import waveReverseImg from "../../assets/wavereverse2.svg";
import linkExtImg from "../../assets/linkExt.svg";
import snake from "../../assets/finalWave2.svg";
import { Swiper } from 'swiper/react';
import { GlobalStyle, Navbar, Logo, Ul, SectionOne, Title, H1, H2, Baloons, Baloon, SectionTwo, ContainerLeft, Left, H11, P, Right, ContainerRight, LogoTitle, LogoTitleH1, SectionThree, H12, Card, Wave, SectionFour, Container, LeftContainer, H13, P1, Button, LinkExt, ProjectImages, SectionFive, WaveReverse, Shortcuts, UlShortcuts, Copyright, Map, ImgCarrossel, H14, StyledSwiperSlide, Name, Function, Desc, SnakeBG , Arrow } from "./style";

const Home = () => {
    const data = [
        {
            id: 1, image: 'https://avatars.githubusercontent.com/u/160804980?v=4', nome: 'Antonio Felipe', cargo: 'Front-End',
            desc: 'Com habilidades diversificadas em tecnologia, atualmente o foco está no desenvolvimento e aplicação de soluções no front-end. Onde o objetivo é criar interfaces modernas,  interativas e centradas na experiência do usuário, utilizando práticas de UI/UX como prototipação e ajustes contínuos no design para garantir a melhor usabilidade. Ao combinar essas abordagens, os produtos não só atendem às necessidades específicas dos usuários, mas também proporcionam uma navegação fluida, intuitiva e envolvente, visando otimizar a interação e a satisfação do usuário em todos os pontos de contato.'
        },
        {
            id: 2, image: 'https://avatars.githubusercontent.com/u/160186899?v=4', nome: 'Cauan Araruna', cargo: 'DBA',
            desc: 'Envolvido no planejamento estratégico do gerenciamento de dados, assegurando eficiência e organização no armazenamento. Inclui também a coleta de informações para garantir que os dados coletados estejam condizentes com a realidade do cliente, devidamente estruturados e armazenados com segurança. Além disso, realiza o desenvolvimento de wireframes e visualizações, ajustando o fluxo do sistema e a experiência do usuário, garantindo que as soluções entregues estejam sempre em sintonia com os dados processados e as necessidades do projeto.'
        },
        {
            id: 3, image: 'https://avatars.githubusercontent.com/u/122701467?v=4', nome: 'Guilherme Sousa', cargo: 'Back-End',
            desc: 'Com experiência sólida no back-end, a atuação envolve a criação de soluções eficientes e escaláveis, garantindo a integração entre diferentes sistemas e camadas da aplicação. O foco está na construção de endpoints que facilitam o gerenciamento de dados essenciais, como informações de usuários e arquivos, além de otimizar a forma como esses dados são armazenados e acessados. A utilização de boas práticas de comunicação entre os serviços assegura que o sistema seja ágil, seguro e responsivo, atendendo às necessidades dos usuários e equipe de forma eficaz.'
        },
        {
            id: 4, image: 'https://avatars.githubusercontent.com/u/177654634?v=4', nome: 'Igor Chu', cargo: 'Tech-Lead',
            desc: 'Um desenvolvedor full stack e líder tecnológico, conhecido por sua abordagem positiva e proativa. Com experiência em diversas tecnologias, ele se destaca na criação de soluções inovadoras e na liderança de times, sempre incentivando a colaboração e o crescimento profissional. Seu foco está em desenvolver produtos de alto impacto, garantindo qualidade, performance e usabilidade. Além disso, ele tem paixão por tecnologia e está sempre em busca de novos desafios para impulsionar sua carreira e contribuir para o sucesso das equipes com as quais trabalha.'
        },
        {
            id: 5, image: 'https://avatars.githubusercontent.com/u/160802109?v=4', nome: 'Laise Martin', cargo: 'Front-End',
            desc: 'Focada no desenvolvimento front-end, está constantemente aprendendo novas abordagens e técnicas para aprimorar a criação de interfaces. Seus feitos envolvem a construção de componentes essenciais para a interação do usuário, sempre priorizando a usabilidade e a estética. Além de se envolver ativamente em outras etapas do processo de negócios, como documentação e elicitação de requisitos, assegurando que todas as soluções estejam alinhadas às necessidades e expectativas do projeto.'
        },
        {
            id: 6, image: 'https://avatars.githubusercontent.com/u/161353790?v=4', nome: 'Naomi Calisto', cargo: 'Project Owner',
            desc: 'Atuando na gestão estratégica das demandas do projeto, com foco na entrega dos requisitos para garantir que as soluções atendam às reais necessidades dos clientes. O contato direto com o cliente final permite entender suas expectativas e traduzir isso em requisitos claros e objetivos. Além disso, o gerenciamento dos processos é feito de forma eficiente, assegurando que as etapas do projeto sejam devidamente cumpridas e com alta qualidade. O relacionamento saudável com a equipe é sempre priorizado, promovendo uma comunicação aberta e colaborativa, essencial para o sucesso do projeto.'
        }
    ]

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
            <Navbar id='inicio'>
                <Logo>
                    <div>we</div>
                    <div>go</div>
                </Logo>
                <Ul>
                    <li><Link to='sobre-nos' smooth={true} duration={700}>Sobre nós</Link></li>
                    <li><Link to='equipe' smooth={true} duration={700}>Equipe</Link></li>
                    <li><Link to='petinder' smooth={true} duration={700}>Projeto</Link></li>
                    <li><Link to='#' smooth={true} duration={700}>PeTinder</Link></li>
                </Ul>
            </Navbar>

            <SectionOne>
                <Title>
                    <H2>Juntos</H2>
                    <H1 id="typing" className="typing-effect"></H1>
                    <H2>em direção ao futuro.</H2>
                </Title>

                <SnakeBG src={snake}></SnakeBG>

                <Baloons>
                    <Baloon>Inovação</Baloon>
                    <Baloon>Soluções</Baloon>
                    <Baloon>Inteligência</Baloon>
                </Baloons>

                <Link to='sobre-nos' smooth={true} duration={700}><Arrow></Arrow></Link>
            </SectionOne>

            <SectionTwo id='sobre-nos'>
                <ContainerLeft>
                    <Left>
                        <H11>WeGo Solutions</H11>
                        <P>
                        Criada com a missão de desenvolver soluções tecnológicas inovadoras que impactam positivamente a sociedade. Combinamos tecnologia e propósito para criar aplicações intuitivas e eficientes, sempre focadas na experiência do usuário e na resolução de desafios reais.
                        </P>
                        <P>
                        Fundada por estudantes da SPTech, a WeGo surgiu da união de talentos que,atuando como estagiários em diferentes empresas, compartilharam a visão de transformar o mundo por meio da tecnologia. Aplicamos metodologias ágeis e inovação contínua para desenvolver soluções escaláveis, conectando pessoas e otimizando processos.
                        </P> 
                        <P>
                        Acreditamos que a tecnologia tem o poder de gerar impacto e promover um futuro mais inteligente e acessível. Nosso compromisso é entregar projetos de qualidade, impulsionando mudanças significativas em diversos setores.
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
                <Card>
                    <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 5000 }} style={{ width: '100%', height: '90%' }}>

                        {data.map((item) => (
                            <StyledSwiperSlide key={item.id}>
                                <ImgCarrossel src={item.image} alt='Slider' className='slide-item' />
                                <Name>{item.nome}</Name>
                                <Function>{item.cargo}</Function>
                                <Desc>{item.desc}</Desc>
                            </StyledSwiperSlide>
                        ))}
                    </Swiper>
                </Card>
                <Wave src={waveImg}></Wave>
            </SectionThree>

            <SectionFour id='petinder'>
                <H14>Projeto Principal</H14>
                <Container>
                    <LeftContainer>
                        <H13>Conheça o PeTinder</H13>
                        <P1>
                            Uma aplicação que combina tecnologia e propósito social, visando facilitar o processo de adoção de animais. Inspirado no conceito do Tinder, a plataforma permite que os adotantes deem "match" com pets cadastrados pela ONG AUmigos do Bem, parceira inicial do projeto. 
                            <br />Ao explorar os perfis dos animais, os usuários podem escolher aqueles que mais se identificam, simplificando a conexão entre pets e possíveis adotantes. A ferramenta busca promover a adoção responsável de forma prática e acessível, apoiando o trabalho da ONG e ajudando mais animais a encontrarem um lar amoroso.
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
                    <li><Link to='inicio' smooth={true} duration={700}>WeGo</Link></li>
                    <li><Link to='sobre-nos' smooth={true} duration={700}>Sobre nós</Link></li>
                    <li><Link to='equipe' smooth={true} duration={700}>Equipe</Link></li>
                    <li><Link to='petinder' smooth={true} duration={700}>Projeto</Link></li>
                    <li><Link to='#' smooth={true} duration={700}>PeTinder</Link></li>
                    </UlShortcuts>

                    <Copyright>© WeGo Solutions</Copyright>
                </Shortcuts>

                <Map>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2874821816254!2d-46.66418892378846!3d-23.55811636147456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d2b063f663%3A0xc567c0d16d0bc582!2sS%C3%A3o%20Paulo%20Tech%20School!5e0!3m2!1spt-BR!2sbr!4v1741144649786!5m2!1spt-BR!2sbr"
                        style={{
                            border: '5px solid #D4D9EE',
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