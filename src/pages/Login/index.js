import React from 'react';
import Menu from '../../componentes/Menu';

import SignIn from '../../componentes/SignIn';
import Footer from '../../componentes/Footer'

function Login () {
  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <SignIn/>
   
      <Footer />

    </div>
  );
}

export default Login;
