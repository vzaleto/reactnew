import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import List from './components/List/List';

const animalsFarm = [
  {type: `turtle`, icon: `🐢`},
  {type: `octopus`, icon: `🐙`},
  {type: `fish`, icon: `🐠`},
  {type: `flamingo`, icon: `🦩`},
  {type: `penguin`, icon: `🐧`}
]

class App extends Component {

  

  render() {
    return (
      <List list={animalsFarm} />
    );
  }
}

export default App;
