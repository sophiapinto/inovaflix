import React from 'react';
import { FooterBase } from './styles';
import inovalogo from '../../assets/img/inovaeducacao.jpg';


function Footer() {
  return (
    <FooterBase>
      <a href="https://www.inova.ma.gov.br/">
        <img src={inovalogo}alt="Logo Inova Maranhão Eixo Educação" />
      </a>
      <p>
        Plataforma de streaming teste desenvolvida por
        {' '}
        <a href="https://github.com/sophiapinto">
          SP
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
