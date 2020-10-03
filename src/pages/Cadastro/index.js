import React from 'react';
import Menu from '../../componentes/Menu';

import SignUp from '../../componentes/SignUp';
import Footer from '../../componentes/Footer'

function Cadastro () {
  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <SignUp/>
    
      <Footer />

    </div>
  );
}

export default Cadastro;
