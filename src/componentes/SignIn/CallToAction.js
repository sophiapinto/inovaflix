import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class CallToAction extends PureComponent {
  render() {
    return (
      <section className="block block-gradient">
        <div className="wrapper">
          <h2 className="title">Ainda não tem acesso a plataforma da Inova Online</h2>
          <p>Crie sua conta para poder acesar todos os nossos conteúdos!</p>
          <Link to="/cadastrar">
            <button className="btn-default btn-dark">Criar conta</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default CallToAction;
