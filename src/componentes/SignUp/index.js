import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import HeaderAction from "./HeaderAction";
import Menu from '../../componentes/Menu';
import Footer from '../../componentes/Footer';
import Button from '../Button';

//import "./signUp.css";
//import "../../index.css";

function SignUp () {
  return (
   <div style={{background: "#141414"}}>
      <Menu />

      <Fragment>
        <HeaderAction />

        <section className="block">
          <div className="wrapper">
            <h2 className="title">Sobre você</h2>

            <form className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">Nome completo</label>
                <input type="text" className="form-input" placeholder="Insira seu nome" />
              </div>
              <div className="form-group form-icon">
                <label className="form-label">Como gostaria de ser chamadx?</label>
                <input type="text" className="form-input" placeholder="Insira como gostaria de ser chamadx?" />
              </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input type="text" className="form-input" placeholder="Insira o seu e-mail" />
              </div>
              <div className="form-group">
                <label className="form-label">Celular</label>
                <input type="phone" className="form-input" placeholder="Insira o número com o DDD" />
              </div>
              <div className="form-group">
                <label className="form-label">Gênero</label>
                <select className="form-input">
                  <option value="Select">Selecione seu gênero</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Masculino">Masculino</option>
                  <option value= "NaoInfo">Prefiro não informar</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Nascimento</label>
                <input type="text" className="form-input" placeholder="Insira a data" />
              </div>
              <div className="form-group">
                <label className="form-label">Qual o nome da sua escola?</label>
                <input type="text" className="form-input" placeholder="Insira o nome da sua escola." />
              </div>
              <div className="form-group">
                <label className="form-label">Escolaridade</label>
                <select className="form-input">
                  <option value="Escolaridade">Insira sua escolaridade</option>
                  <option value="Fundamental">Ensino Fundamental</option>
                  <option value="Medio">Ensino Médio</option>
                  <option value="MedTec">Ensino Médio Técnico</option>
                  <option value="Superior">Ensino Superior</option>                         
                
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">CEP</label>
                <input type="text" className="form-input" placeholder="Insira seu CEP" />
              </div>
              <label className="form-checkbox">
                <input type="checkbox" />
                Sou uma pessoa com deficiência
              </label>
            </form>
          </div>
        </section>
        <section className="block">
          <div className="wrapper">
            <h2 className="title">Sua senha Inova</h2>
            <p>A senha deve possuir no mínimo 6 caracteres</p>
            <form className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">Crie uma nova senha</label>
                <i className="icon icon-locker" />
                <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira uma nova senha" />
              </div>
              <div className="form-group form-icon">
                <label className="form-label">Confirmar senha</label>
                <i className="icon icon-locker" />
                <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira a nova senha criada" />
              </div>
              <label className="form-checkbox">
                <input type="checkbox" />
                Concordo com os termos de uso
              </label>
              <Button as={Link} className="ButtonLink" to="/">
                Finalizar cadastro
              </Button>

              <Button as={Link} className="ButtonLink" to="/">
                Já possui uma conta Inova
              </Button>
            </form>
          </div>
        </section>
      </Fragment>

      <Footer />
    </div>
  );
}

export default SignUp;
