import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';

function VerRanking () {

    return (
      <PageDefault>
        <h1>Ranking</h1>
        
        
        <Link to="/cadastro/Ranking">
            Ver ranking do Maratoninha Maker
        </Link>
      
      </PageDefault>
  
  
    )
}

export default VerRanking;