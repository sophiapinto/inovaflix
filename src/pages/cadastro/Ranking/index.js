import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';

function VerRanking () {

    return (
      <PageDefault>
        <h1>Ver ranking</h1>
        
        
        <Link to="/">
            Voltar para a página inicial
        </Link>
      
      </PageDefault>
  
  
    )
}

export default VerRanking;