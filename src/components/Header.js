import React from 'react';
import { MdPersonOutline } from "react-icons/md";

import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="facebook_logo"/>
        <a href="#">Meu perfil<MdPersonOutline color="#fff" size={25}/></a>
      </nav>
    </header>
  );
}

export default Header;
