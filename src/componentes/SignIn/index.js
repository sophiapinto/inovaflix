import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CallToAction from "./CallToAction";

import Menu from '../../componentes/Menu';
import Footer from '../../componentes/Footer';
import Button from '../Button';

//import button from '../../componentes/ButtonAcess';
//import "./signIn.css";

function SignIn () {
  return (
   <div style={{background: "#141414"}}>
     <Menu />
     
     <Fragment>
        <CallToAction />

        <section className="block">
          <div className="wrapper">
            <h2 className="title">Entrar</h2>
            <p>Venha participar do Inova Online!</p>

            <form className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">E-mail</label>
                <i className="icon icon-user" />
                <input type="text" className="form-input form-icon--user" placeholder="Insira o seu e-mail" />
              </div>
              <div className="form-group form-icon">
                <label className="form-label">Senha</label>
                <i className="icon icon-locker" />
                <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira sua senha" />
              </div>
              <a href="#" className="form-link">
                Esqueci minha senha
              </a>
              <Button as={Link} className="ButtonLink" to="/Login/Home">
                Acessar
              </Button> 
              

             </form>
          </div>
        </section> 
      </Fragment>
      <Footer/>
    </div>  
  );
}

export default SignIn;