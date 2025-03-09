import styled, { createGlobalStyle } from "styled-components";
import backgroundOne from "../../assets/backg1.svg";
import backgroundTwo from "../../assets/backg2extra.svg";
import backgroundProject from "../../assets/projeto.svg";

export const GlobalStyle = createGlobalStyle`
  :root {
    --first-color: #D4D9EE;
    --second-color: #344CB7;
    --third-color: #2A2E30;
    --fourth-color: #FFC0D9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Kumbh Sans";
  }
`;

export const Navbar = styled.nav`
  height: 90px;
  width: 100%;
  background-color: var(--third-color);
  display: flex;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

export const Logo = styled.div`
  height: 100%;
  width: 100px;
  color: var(--first-color);
  font-size: 40px;
  align-items: center;
  flex-direction: column;
  padding-right: 20px;
  text-align: center;
  line-height: 25px;
  border-right: 5px solid var(--first-color);
  user-select: none;

  div:nth-child(2) {
    padding-left: 24px;
  }
`;

export const Ul = styled.ul`
  color: var(--first-color);
  display: flex;
  flex-direction: row;
  gap: 50px;
  list-style: none;

  li:nth-child(1) {
    margin-left: 40px;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: var(--second-color);
    transition: color 0.2s ease;
  }
`;

export const SectionOne = styled.section`
  background-color: var(--first-color);
  height: calc(100vh - 90px);
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.div`
  width: 50%;
  flex-direction: column;
  font-size: bold;
  color: var(--second-color);
  margin-left: 76px;
  user-select: none;
`;

export const H1 = styled.h1`
  font-size: 88px;
  border-right: 4px solid var(--second-color);
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 4px solid var(--second-color);
  animation: blink 0.9s infinite;
  line-height: 100px;
  height: 88px;
`;

export const H2 = styled.h2`
  font-size: 33px;
`;

export const Baloons = styled.div`
  height: 372px;
  width: 348px;
  display: flex;
  align-items: center;
  gap: 78px;
  flex-direction: column;
  margin: 0 auto;
`;

export const Baloon = styled.div`
  height: 72px;
  width: 263px;
  background-color: var(--third-color);
  border-radius: 15px;
  box-shadow: 7px 8px 2px rgba(15, 20, 26, 0.979);
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  animation: balaoflutuando 6s ease-in-out infinite;
  transition: background-color .5s ease;
  user-select: none;

  &:hover {
    background-color: var(--second-color);
  }

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    margin-left: 90px;
    background-color: var(--second-color);
    animation-delay: 1s;

    &:nth-child(2):hover {
      background-color: var(--third-color);
    }
  }

  &:nth-child(3) {
    animation-delay: 2s;
  }

  @keyframes balaoflutuando {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(15px, -15px);
    }
    50% {
      transform: translate(30px, 0);
    }
    75% {
      transform: translate(15px, 15px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export const SectionTwo = styled.section`
    height: 100vh;
    width: 100vw;
    background-image: url(${backgroundOne});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerLeft = styled.div`
    height: 86.42vh;
    width: 93.52vw;
    border-radius: 30px;
    background-color: #2a2e30F2;
    display: flex;
`;

export const Left = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    color: var(--first-color);
    margin-left: 45px;
    align-self: center;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const H11 = styled.h1`
    font-size: 40px;
    font-weight: bold;
`;

export const P = styled.p`
    font-size: 22px;
`;

export const Right = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerRight = styled.div`
    height: 80%;
    width: 65%;
    background-color: var(--second-color);
    box-shadow: 7px 8px 2px rgba(15, 20, 26, 0.979);
    display: flex;
    align-items: center;
    font-weight: bold;
    border-radius: 30px;
    justify-content: center;
`;

export const LogoTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    left: -27px;
    top: -10px;
`;

export const LogoTitleH1 = styled.h1`
    color: var(--first-color);
    font-size: 140px;
    line-height: 130px;
    user-select: none;

    &:nth-child(2) {
        padding-left: 150px;
`;

export const SectionThree = styled.section`
    background-color: var(--third-color);
    height: 100vh;
    width: 100vw;
    background-image: url(${backgroundTwo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const H12 = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: var(--first-color);
    position: absolute;
    align-self: center;
    top: 97px;
`;

export const Card = styled.div`
    height: 73%;
    width: 80%;
    background-color: var(--first-color);
    border-radius: 16px;
    position: absolute;
    bottom: 20px;
`;

export const Wave = styled.img`
    position: absolute;
    bottom: -37px;
    width: 100%;
    z-index: 10;
    scale: 1.3;
`;

export const SectionFour = styled.section`
    background-color: var(--fourth-color);
    height: 100vh;
    width: 100vw;
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

export const LeftContainer = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 64px;
    justify-content: space-evenly;
`;

export const H13 = styled.h1`
    font-size: 41px;
    font-weight: bold;
`;

export const P1 = styled.p`
    color: #000000;
    font-size: 22px;
    font-weight: 550;
`;

export const Button = styled.button`
    height: 84px;
    width: 378px;
    background-color: var(--third-color);
    box-shadow: 7px 8px 2px rgba(15, 20, 26, 0.979);
    border-radius: 15px;
    color: var(--first-color);
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: none;
    cursor: pointer;
    transition: transform 0.7s ease, background-color 0.3s ease;

    &:hover {
        background-color: var(--second-color);
        transform: scale(1.05);
    }
`;

export const LinkExt = styled.img`
    width: 30px;
    height: 30px;
`;

export const ProjectImages = styled.div`
    align-self: center;
    height: 80%;
    width: 50%;
    background-image: url(${backgroundProject});
    background-repeat: no-repeat;
`;

export const SectionFive = styled.section`
    background-color: var(--third-color);
    height: 75vh;
    width: 100vw;
    position: relative;
    display: flex;
`;

export const WaveReverse = styled.img`
    position: absolute;
    top: -1px;
    left: 0px;
    width: 100%;
    z-index: 10;
`;

export const Shortcuts = styled.div`
    width: 25%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
`;

export const UlShortcuts = styled.ul`
    margin-left: 80px;
    margin-top: 120px;
    color: var(--first-color);
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    font-size: 20px;
    font-weight: bold;

    li:nth-child(1) {
          text-decoration: underline;
    }

    li:nth-child(1):hover,
    a:hover {
      color: var(--second-color);
      transition: color 0.2s ease;
    }
`;

export const Copyright = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: var(--first-color);
    position: absolute;
    bottom: 3%;
    left: 3%;
    user-select: none;
`;

export const Map = styled.div`
    width: 75%;
    height: 100%;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;