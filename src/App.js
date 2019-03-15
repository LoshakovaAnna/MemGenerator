import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import StartForm from './screens/StartForm';
import Generator from './screens/Generator';
import Mem from './screens/Mem';


class App extends Component {
  render() {
    return (     
        <div>
          <Route   path='/'           component = {StartForm}/>
          <Route   path='/generator' component = {Generator}/>
          <Route   path='/generator/mem' component = {Mem}/>
          

      </div>
    );
  }
}

export default App;
