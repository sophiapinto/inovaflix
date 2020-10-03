import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
//import Button from '../../../components/Button';

function VerRanking () {

    return (
      <PageDefault>
        <h1>Ver ranking</h1>
        
        <Link to="/Login/Home">
            Voltar para a página inicial.
        </Link>
      
      </PageDefault>
  
  
    )
}

export default VerRanking;