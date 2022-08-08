import react from "react";
import TelaInicial from "../Pages/TelaInicial";
import TelaMatches from "../Pages/TelaMatches";
import { useState } from 'react';
import { Container, DivImg, MaxContainer, Footer } from './HeaderStyle'
import Logo from '../Assets/Logo.png'
import {IoMdHeart} from 'react-icons/io'
import {AiFillLinkedin} from 'react-icons/ai'


function Header() {

  const [screen, setScreen] = useState("Tela Inicial")

  const changeScreen = (choose) => {
    setScreen(choose)
  }

  return (
    <MaxContainer>
      <Container>
        <DivImg>
          <img src={Logo} alt='Logo' />
        </DivImg>
        {screen === "Tela Inicial" ? (
          <TelaInicial screen={screen} changeScreen={changeScreen} />
        ) : (
          <TelaMatches screen={screen} changeScreen={changeScreen} />
        )}
    <Footer> Desenvolvido com <IoMdHeart/> por Nicole Prim <a target={'blank'} href="https://www.linkedin.com/in/nicole-prim-478b6822b/"> <AiFillLinkedin /> </a> </Footer>
      </Container>

    </MaxContainer>
  )
}

export default Header;
