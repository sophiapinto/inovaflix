import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import rankingreturn from './pages/Ranking/rankingreturn/index';
//import VerRanking from './pages/Ranking/RankingVer/index';

import SignIn from "./componentes/SignIn/index";
import SignUp from "./componentes/SignUp/index";


const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>

    <Switch>
      <Route path= "/Login/Home" component = {Home} exact />
      <Route exact path="/" component={SignIn} />
      <Route exact path="/cadastrar" component={SignUp} />
      <Route path= "/Ranking/rankingreturn" component = {rankingreturn} />
      <Route component = {Pagina404} /> 

    </Switch>

  </BrowserRouter>,

  document.getElementById('root')
);
